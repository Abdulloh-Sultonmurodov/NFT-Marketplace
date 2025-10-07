import Image from "next/image";

const loading = () => {
  return (
    <div className="text-white h-[100vh] flex items-center justify-center">
      <Image src={"/loading.png"} alt="Loading img" width={50} height={50} />
    </div>
  );
};

export default loading;
