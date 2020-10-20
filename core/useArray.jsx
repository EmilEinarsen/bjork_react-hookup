import React from 'react'

const useArray = initial => {
	const [ array, setArray ] = useState(initial)

	return [
		array,
		setArray,
		{
			add: val => setArray( arr => [ ...arr, val ]),
			clear:  setArray([]),
			removeByIndex: index => setArray( arr => arr.filter((v, i) => i !== index )),
			removeById: id => setArray( arr => arr.filter(v => v && v.id !== id )),
		}
	]
}

export default useArray