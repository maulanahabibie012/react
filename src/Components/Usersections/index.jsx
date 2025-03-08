import Usercards from "../Usercards";

export default function Usersection(props) {
  const { dataUser } = props;
  return (
    <div>
      {dataUser.map(data => 
      (<Usercards key={data.id} dataUser={data} />))}
    </div>
  );
}
