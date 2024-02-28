import { Card } from "@/components/ui/card";
import BoardItemImage from "./BoardItemImage";

function BoardItem() {
  return (
    <>
      <Card className="w-[250px] h-[250px] p-2">
        <BoardItemImage />
      </Card>
    </>
  );
}

export default BoardItem;
