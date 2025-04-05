import Card from "@/components/Card";
import photos from "../data/photos.json";

export default function Photos() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {photos.toReversed().map((photo) => {
        return (
          <Card key={photo.id} source={photo.source} title={photo.title} caption={photo.caption} />
        );
      })}
    </div>
  );
}
