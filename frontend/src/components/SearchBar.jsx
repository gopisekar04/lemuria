export default function SearchBar({onSort}) {
  return (
    <form className="w-full flex justify-center">
      {/* <label htmlFor="searchProducts" className="sr-only">Search Products</label> */}
      <input
        id="searchProducts"
        type="search"
        placeholder="Search Products"
        className="grow px-8 py-2 w-full rounded-[33px] border  lg:max-w-[50%]"
      />
      <div className="flex flex-col items-start ml-5">
        <p>Sort By</p>
        <select   
          onChange={onSort}      
          className="rounded-[33px] border px-4 py-2"
          aria-label="Sort products"
        >          
          <option value={"high-low"}>Price - high to low</option>
          <option value={"low-high"}>Price - low to high</option>
          <option value={"discount"}>Discount</option>
          <option value={"rating"}  selected>Rating</option>
        </select>
      </div>
    </form>
  );
}

