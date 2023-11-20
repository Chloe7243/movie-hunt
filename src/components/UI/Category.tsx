const Category = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4 min-h-fit">{children}</div>;
};

export default Category;
