import ItemList from './ItemList'



const ItemListContainer = ({stickerApi, goToDetail}) => {

    return(
        <>
        <ItemList item={stickerApi} goToDetail={goToDetail}></ItemList>
        </>
    )
}


export default ItemListContainer;