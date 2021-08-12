export async function getStaticPaths() {
  let items = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await items.json();
  let paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

//the above path is passed down here in context
export const getStaticProps = async (context) => {
  console.log(context)
  let user = await fetch('https://jsonplaceholder.typicode.com/users/' + context.params.id);
  let data = await user.json();
  return {
    props: {
      response: data,
    },
  };
};

export default function Detials({ response }) {
  return <div>{response.username}</div>;
}
