import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-[1400px] mx-auto px-8 text-center text-gray-600">
        <div className="mb-4 flex justify-center">
          <Logo size="medium" />
        </div>
        <p className="text-gray-700">Connecting fashion visions with independent designers worldwide</p>
      </div>
    </footer>
  );
}
