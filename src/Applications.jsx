const Applications = () => {
  return (
    <div>
      <section className="bg-white p-2 rounded shadow-md">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4">Job Title</th>
              <th className="text-left py-2 px-4">Location</th>
              <th className="text-left py-2 px-4">Date Applied</th>
              <th className="text-left py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">Dance Troupe for Corporate Event</td>
              <td className="py-2 px-4">Gurgaon, Haryana</td>
              <td className="py-2 px-4">5/27/15</td>
              <td className="py-2 px-4 text-blue-600">Selected</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">UI/UX Designer</td>
              <td className="py-2 px-4">Mumbai</td>
              <td className="py-2 px-4">9/4/16</td>
              <td className="py-2 px-4 text-green-600">Shortlisted</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Frontend developer</td>
              <td className="py-2 px-4">Chennai</td>
              <td className="py-2 px-4">3/17/15</td>
              <td className="py-2 px-4 text-blue-600">Selected</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Backend developer</td>
              <td className="py-2 px-4">Pune</td>
              <td className="py-2 px-4">8/14/15</td>
              <td className="py-2 px-4 text-green-600">Shortlisted</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Applications;
