import {useEffect, useState} from 'react';
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import apiRequest from './apiRequest';
import {JS} from "json-server/lib/cli/utils/is";

const Index = () => {

  const API_URL= 'http://localhost:3500/items';

  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /*
    console.log('before useEffect');
    useEffect(() => {
      console.log('updating items state');
      localStorage.setItem('shoppingList', JSON.stringify(items));
    }, [items])
    console.log('after useEffect');
  */

  useEffect(() => {
    const fetchItems = async () => {
      try
      {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error('DId not receive expected data')
        }
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
        console.log(listItems);
      }
      catch (err) {
        console.log(err.message);
        setFetchError(err.message)
      }
      finally
      {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      /**
       * fetchItems does not return a value. therefore this async IIFE is not required, you can just make a call to fetchItems()
       */
      (async () => await fetchItems())();
      // fetchItems();
    }, 2000);

  }, [])

  const handleCheck = async (id) => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item);
    // setAndSaveItems(listItems);
    setItems(listItems);

    const myItem = listItems.filter(item => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const listItems = items.filter(item => item.id !== id);
    // setAndSaveItems(listItems);
    setItems(listItems);

    const deleteOptions = {
      method: 'DELETE',
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    // setAndSaveItems(listItems);
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  /*const setAndSaveItems = (newItems) => {
    setItems(newItems);
    // localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }*/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log('newItem: ', newItem);
    addItem(newItem);
    setNewItem('');
  }
  return (
    <>
      <Header title={"Groceries List"} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {
          isLoading && <p>Loading Items</p>
        }
        {
          fetchError &&
          <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>
        }
        {!fetchError && !isLoading &&
          <Content
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        }
      </main>

      <Footer length={items.length} />
    </>
  );
};

export default Index;
