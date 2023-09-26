export default async function Page() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/5');
    console.log(await data.json());
}