import {useRef} from 'react';
import {FaPlus} from "react-icons/all";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus required
        ref={inputRef}
        type="text" id={'addItem'}
        placeholder={'add item'}
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
        type={'submit'}
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus/>
      </button>
    </form>
  );
};

export default AddItem;
