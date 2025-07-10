const educationHistory = [
    { id: 1, period: '2022 - Sekarang', institution: 'Universitas Amikom Yogyakarta ', major: 'S1 -  Informatika' },
    { id: 2, period: '2019 - 2022', institution: 'SMK Muhammadiyah 1  Yogyakarta', major: 'Rekayasa Perangkat Lunak' }
  ];
  
const skills = [
  { name: 'React.js', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
  { name: 'CodeIgniter', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg'},
  { name: 'Laravel', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'},
  { name: 'Tailwind CSS', level: 'Menengah', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'},
  { name: 'Bootstrap CSS', level: 'Menengah', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'},
  { name: 'MySql', level: 'Menengah', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
  { name: 'Git & GitHub', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
  { name: 'HTML5 & CSS3', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'}
];
  const projects = [
    {
      title: 'Website RentalIqra',
      image: 'rental',
      description: 'Website Penyewaan Mobil Yang Berada diPalu.',
      tech: ['React.js', 'Laravel.js', 'MySql'],
      link: 'https://github.com/LavinaCaco/rentaliqra'
    },
    {
      title: 'Website Pengaduan Masyarakat',
      image: 'pengaduan',
      description: 'Website Yang Digunakan Untuk Pengaduan Masyarakat.',
      tech: ['CodeIgniter','Bootstrap', 'MySql'],
      link: 'https://github.com/LavinaCaco/Lavina-Pengaduan'
    }
  ];
  
  module.exports = { educationHistory, skills, projects };