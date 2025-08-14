import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">

  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Join now!</h1>
      <p className="py-6">
        Welcome to the San Diego Mella Run Club. We like to run and drink Melas post run.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  );
}
