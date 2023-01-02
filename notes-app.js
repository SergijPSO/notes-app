let notes = getSavedNotes()

const filters = {
	searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
	const id = uuidv4()
	notes.push({
		id: id,
		title: '',
		body: ''
	})

	saveNotes(notes)
	renderNotes(notes, filters)
	location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
	filters.searchText = e.target.value
	renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
	console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
	if(e.key === 'notes') {
		notes = JSON.parse(e.newValue)
		renderNotes(notes, filters)
	}
})

const now = moment()
now.add(1, 'week').subtract(20, 'days')

console.log(now.format('MMMM Do, YYYY'))
console.log(now.fromNow())
const nowTimeStamp = now.valueOf()
console.log(moment(nowTimeStamp).toString())

const birthday = moment()
birthday.year(1989)
birthday.month(11)
console.log(birtday.format('MMM D, YYYY'))