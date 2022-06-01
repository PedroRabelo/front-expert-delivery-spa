import { ReactNode } from "react";
import { FilterModal } from "../filter-modal";
import { Navbar } from "../navbar";
import { PageHead } from "../page-head";
import { Sidebar } from "../sidebar";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
  description?: string;
  keywords?: string;
};

export const PageTemplate = ({
  children,
  title,
  description,
  keywords,
}: Props) => {
  return (
    <>
      <PageHead title={title} description={description} keywords={keywords} />
      <FilterModal />
      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};
