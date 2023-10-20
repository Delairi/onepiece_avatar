const keysInformation = [
  "duration",
  "score",
  "rating",
  "rank",
  "popularity",
  "members",
  "favorites",
  "season",
  "year"
];

const Information = (movie) => {
  return (
    <div className='flex flex-col justify-center w-full items-center mt-5'>
    <table className="table-normal">
      <thead>
        <tr className='tr-normal'>
          <th >Information</th>
          <th>&nbsp;</th>
        </tr>
      </thead>

      <tbody>
        {
          keysInformation.map((key,index) => {
            if (movie[key]) {
              return (
                <tr key={index+'information'}>
                  <td>{key}</td>
                  <td>{movie[key]}</td>
                </tr>
              );
            }
          })
        }
      </tbody>
    </table>
    </div>
  );
};

export default Information;
