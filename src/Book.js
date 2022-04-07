const Book = ({author, title, img, ydisMaterial, children}) => { // props - its an object, already destructured
    return (
      <div className='book'>
        <img src={img}/>
        <h1 style={{fontSize: '30px', backgroundColor: 'yellow'}}>{author}</h1>
        <h2>{title}</h2>
        {ydisMaterial && <p>ყდის მატერიალი: {ydisMaterial}</p>}
        {children}
      </div>
    )
}

export default Book;