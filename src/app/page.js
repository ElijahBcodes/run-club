import Image from "next/image";

export default function Home() {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1590950995235-a099ca2c39f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjB0cmFpbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=600&w=2000)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to the Sky Crew Run Club</h1>
      <p className="mb-5">
        Join us for our weekly trail runs on Tuesday or Thursday in Mission Trails Regional Park.
      </p>
      <button className="btn btn-primary">Join Us</button>
    </div>
  </div>
</div>
  );
}
