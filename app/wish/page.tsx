import Taco from "@/app/wish/taco";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">
        Dillon&rsquo;s Wish List
      </h1>
      <div className="font-light text-gray-600 w-full max-w-lg text-center mt-6 md:text-2xl">
        <div>Make tacos for my friends</div>
        <Taco/>
      </div>
    </main>
  );
}
