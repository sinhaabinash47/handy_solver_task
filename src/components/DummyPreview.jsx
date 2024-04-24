import React from "react";

export const DummyPreview = () => {
  return (
    <div className="px-3">
      <div className="flex justify-between mb-2">
        <div className="text-xl flex items-center">
          {}
          Job Title
        </div>
        <div className="flex gap-2">
          <button
            className="p-3"
            style={{ background: "pink", borderRadius: "35px" }}
          >
            Remote
          </button>
          <button
            className="p-3"
            style={{ background: "pink", borderRadius: "35px" }}
          >
            5 Days Week
          </button>
        </div>
      </div>
      <div>
        <div>
          <span className="font-bold">Introduction: </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium porro facilis laboriosam perferendis aperiam modi quam,
            veritatis nihil! Iusto, id!
          </span>
        </div>
      </div>
      <div className="mt-2">
        <div className="font-bold">Roles and Responsibilty</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          cumque exercitationem deleniti iusto odit quam temporibus, placeat non
          in reprehenderit.
        </p>
      </div>
      <div className="mt-2 flex">
        <div>
          <span className="font-bold">Prefered Experience: </span>
          <span>0 to 2 years</span>
        </div>
      </div>
      <div className="mt-2 flex">
        <div>
          <span className="font-bold">Qualification: </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium porro facilis laboriosam perferendis aperiam modi quam,
            veritatis nihil! Iusto, id!
          </span>
        </div>
      </div>
      <div className="mt-2 flex">
        <div>
          <span className="font-bold">Concluding Statement: </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium porro facilis laboriosam perferendis aperiam modi quam,
            veritatis nihil! Iusto, id!
          </span>
        </div>
      </div>
      <div className="mt-2 flex">
        <div>
          <span className="font-bold">Company: </span>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className="mt-2 flex">
        <div>
          <span className="font-bold">Location: </span>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className="mt-2 flex">
        <div>
          <span className="font-bold">Job Type: </span>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
    </div>
  );
};
