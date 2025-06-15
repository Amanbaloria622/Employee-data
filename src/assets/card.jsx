export const Card = ({ detail }) => {
  const { avatar, first_name, last_name, email, id } = detail;
  return (
    <>
      <div className="detailcontaner">
        <div className="personimg">
          <img className="img" src={avatar}></img>
        </div>
        <div className="detail">
          <p>ID = {id}</p>
          <p>
            Name = {first_name} {last_name}
          </p>
          <p>Email={email}</p>
        </div>
      </div>
    </>
  );
};
