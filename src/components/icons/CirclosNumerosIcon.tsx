export const CirclosNumerosIcon = ({
  numero = 1,
}: {
  numero: string | number;
}) => {
  return (
    <div className="flex flex-col bg-VerdeBaseClaro rounded-full text-center w-[34px] h-[34px] justify-center align-middle">
      <strong className="text-white">{numero}</strong>
    </div>
  );
};
