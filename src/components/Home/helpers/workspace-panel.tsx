import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { File } from "lucide-react";

type Props = {};

const workspacesData: WorkSpaceItemsProps[] = [
  {
    workspaceName: "workspace",
    items: [
      {
        type: "folder",
        name: "folder1",
        items: [
          {
            type: "folder",
            name: "subfolder1",
            items: [
              {
                type: "file",
                name: "file-example.json",
              },
            ],
          },
        ],
      },
      {
        type: "file",
        name: "file-example.json",
      },
    ],
  },
  {
    workspaceName: "workspace2",
    items: [
      {
        type: "file",
        name: "file-example.json",
      },
    ],
  },
];

const WorkspacePanelComponent = (props: Props) => {
  return (
    <div className="w-96 h-dvh p-3 bg-slate-100 border border-r-slate-200">
      <h2 className="font-semibold">#Workspaces</h2>
      <ul>
        {workspacesData.map((workspace) => (
          <WorkspaceItem key={workspace.workspaceName} data={workspace} />
        ))}
      </ul>
    </div>
  );
};

type WorkSpaceItemsProps = {
  workspaceName: string;
  items: WorkSpaceItems[];
};

type WorkSpaceItems = {
  name: string;
  type: "folder" | "file";
  items?: WorkSpaceItems[];
};

const WorkspaceItem = ({ data }: { data: WorkSpaceItemsProps }) => {
  return (
    <div>
      <p className="text-slate-600">{data.workspaceName}</p>
      <Accordion type="multiple">
        {data.items.map((workspaceItem) => (
          <WorkspaceItemFolder key={workspaceItem.name} data={workspaceItem} />
        ))}
      </Accordion>
    </div>
  );
};

const WorkspaceItemFolder = ({ data }: { data: WorkSpaceItems }) => {
  if (data.type === "file")
    return (
      <div className="flex">
        <File /> {data.name}
      </div>
    );
  return (
    <div>
      <AccordionItem value={data.name}>
        <AccordionTrigger>{data.name}</AccordionTrigger>
        <AccordionContent>
          {data.items?.map((item) => (
            <WorkspaceItemFolder key={item.name} data={item} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

export default WorkspacePanelComponent;
