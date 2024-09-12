import useGenre from "../hooks/useGenre"

const GenreList = () => {
    const {data, error, isLoading} = useGenre()
    console.log(data)
return (
<ul>
    {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
</ul>
)
}

export default GenreList