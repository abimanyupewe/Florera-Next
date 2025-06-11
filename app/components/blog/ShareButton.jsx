import { FaInstagram, FaLinkedin, FaWhatsapp, FaTiktok } from "react-icons/fa";

const ShareButtons = () => {
  const shareUrl =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.href)
      : "";
  const shareText = encodeURIComponent("Check out this blog post!");

  const instagramShareUrl = `https://www.instagram.com/?url=${shareUrl}`; // Placeholder
  const tiktokShareUrl = `https://www.tiktok.com/share?url=${shareUrl}`; // Placeholder
  const whatsappShareUrl = `https://wa.me/?text=${shareText}%20${shareUrl}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

  // Tailwind tidak memiliki utilitas grayscale langsung untuk ikon svg react-icons,
  // jadi kita gunakan 'filter grayscale' css dan hilangkan saat hover via className.

  return (
    <div className="mt-6 flex justify-between space-x-4">
      <p className="font-semibold">Share</p>
      <div className="flex space-x-2">
        <a
          href={instagramShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Instagram"
          className="filter grayscale hover:filter-none text-pink-600"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href={tiktokShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on TikTok"
          className="filter grayscale hover:filter-none text-black"
        >
          <FaTiktok size={24} />
        </a>
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="filter grayscale hover:filter-none text-green-600"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="filter grayscale hover:filter-none text-blue-700"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;
