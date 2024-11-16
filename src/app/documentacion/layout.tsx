interface LayoutDocumentacionProps {
  children: React.ReactNode;
}
const LayoutDocumentacion = ({ children }: LayoutDocumentacionProps) => {
  return <div className="bg-VerdeFondosIconos h-svh">{children}</div>;
};

export default LayoutDocumentacion;
