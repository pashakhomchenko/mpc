interface FolderProps {
  children: React.ReactNode;
}

const Folder = ({ children }: FolderProps) => {
  return <div>{children}</div>;
};

export default Folder;
