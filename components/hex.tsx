export default function Hex({ src }: { src: string }) {
  return (
    <div className="hex">
      <img src={src} className="w-10 h-10 object-contain" />
    </div>
  );
}