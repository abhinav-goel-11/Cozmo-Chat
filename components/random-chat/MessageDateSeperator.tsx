type MessageDateSeperatorProps = {
  date: string;
};

export default function MessageDateSeperator({
  date,
}: MessageDateSeperatorProps) {
  const dateString = `${new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
  return (
    <div className="flex items-center gap-x-3">
      <hr className="flex-1 text-[rgba(144,152,161,0.10)]" />
      <div className="text-sm text-secondry-gray font-medium">{dateString}</div>
      <hr className="flex-1 text-[rgba(144,152,161,0.10)]" />
    </div>
  );
}
