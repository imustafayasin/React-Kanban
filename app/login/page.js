export default function Login() {
  return (
    <div className="w-80 h-full justify-center items-center flex container mx-auto">
      <form className="text-center rounded p-5 border">
        <h2 className="mb-5">Login</h2>
        <input
          type="email"
          className="p-2 mb-5 rounded border"
          placeholder="Your Email"
          required
        />

        <button className="px-4 bg-indigo-500 text-white py-3 border rounded-md">
          Sign in with E-mail
        </button>
      </form>
    </div>
  );
}
