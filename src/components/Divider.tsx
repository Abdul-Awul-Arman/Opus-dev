export default function Divider() {
  return (
    <div className="flex justify-center">
      <div
        className="block w-full max-w-[1152px] h-[1px] relative m-0 p-0 border-none shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgb(233, 233, 233) 0%, rgb(212, 212, 212) 50%, rgb(233, 233, 233) 100%)",
        }}
      />
    </div>
  );
}



