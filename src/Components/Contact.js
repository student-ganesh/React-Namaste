const Contact = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl p-3 m-3 text-center">Contact Us</h2>

      <form className="p-2 m-2">
        <input
          type="text"
          className="border m-2 border-black"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className=" m-2 border border-black"
          placeholder="Message"
        ></input>
        <button className="border cursor-pointer p-2 m-2 py-1 border-black bg-green-400 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
