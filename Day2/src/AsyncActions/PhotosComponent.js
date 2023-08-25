import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchContent } from './asyncconfig'


export default function PhotosComponent() {


    var dispatch = useDispatch()


  var albums=  useSelector(state=>state.albums)

   var isLoading= useSelector(state=>state.isLoading)

  var error=  useSelector(state=>state.error)




    useEffect(()=>{


        dispatch(fetchContent())
    },[])


    if(isLoading){

        return "Loading...."
    }

  return (
    <div>


        {

            albums.map((album)=>
                    <div>
                            <li>{album.title}</li>
                    </div>
            
            )
        }
    </div>
  )
}
