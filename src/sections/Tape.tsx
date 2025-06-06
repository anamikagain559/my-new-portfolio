import StarIcon from "@/assets/icons/star.svg";
const Words = [
  "Performant",
  "Scalable",
  "Reliable",
  "Secure",
  "Flexible",
  "Innovative",
  "Efficient",
]
export const TapeSection = () => {
  return <div>
  <div className="flex  gap-4">
      {Words.map((word, index) => (
      <div key={word} className="inline-flex gap-4">
       <span>{word}</span> 
       <StarIcon className="size-6"/>
      </div>
    ))}
  </div>
  </div>;
};
