import React from "react";
import WorkspacePanelComponent from "./helpers/workspace-panel";
import EditorPanelComponents from "./helpers/editor-panel";
import VersioningPanelComponent from "./helpers/versioning-panel";

type Props = {};

const HomeComponent = (props: Props) => {
  return (
    <div className="flex justify-center content-center">
      <WorkspacePanelComponent />
      <EditorPanelComponents />
      <VersioningPanelComponent />
    </div>
  );
};

export default HomeComponent;
