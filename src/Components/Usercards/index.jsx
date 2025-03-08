export default function Usercards(props) {
  const { dataUser } = props;
  return (
    <div>
      <h1>
        {dataUser.first_name} {dataUser.last_name}
      </h1>
      <h2> {dataUser.email}</h2>
    </div>
  );
}
