"use client";

import Department from "./Department";
import BottomBar from "./BottomBar";

const DepartmentsSubsection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 relative border-none">
        <Department department="mechanical" />
        <Department department="composites" />
        <Department department="marketing" />
        <Department department="software" />
        <Department department="electrical" />
        <Department department="vehicle performance" />
      </div>
      <BottomBar />
    </div>
  );
};

export default DepartmentsSubsection;
