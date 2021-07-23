

export const AddToPlayListButton=({setDisplay,display})=>{

    return <>
     <i style={{cursor:"pointer"}}  onClick={()=>setDisplay(!display)} className="fas fa-plus icon-sm primary-font"></i>
    
     </>
}