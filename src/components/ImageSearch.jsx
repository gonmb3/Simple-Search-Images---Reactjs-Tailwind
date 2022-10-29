import { useState } from 'react';

const ImageSearch = ({searchText}) => {

    const [text,setText] = useState("");

    const onSubmit = (e) => {
            e.preventDefault();

            searchText(text)
    }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form 
        onSubmit={onSubmit}
        action=""
         className="w-full max-w-sm">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
                <input
                onChange={e => setText(e.target.value)}
                 type="text" 
                 className=' appearance-none bg-transparent border-none w-full
                 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Buscar imagenes...' />

                 <button
                 type='submit'
                 className='flex-shrink-0 bg-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2'>
                        Buscar
                 </button>

            </div>
        </form>
    </div>
  )
}

export default ImageSearch