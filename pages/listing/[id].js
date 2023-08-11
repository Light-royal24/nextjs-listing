export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const datas = await res.json()

    const paths = datas.map(lord => {
        return {
            params: { id: lord.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

    const data = await res.json();

    return {
        props: {lord: data}
    }
}

const userDetails = ({ lord }) => {
    return (
        <div>
            <h1>{lord.name}</h1>
            <p>{lord.email}</p>
            <p>{lord.website}</p>
            <p>{lord.address.city}</p>
        </div>
    );
}
 
export default userDetails;