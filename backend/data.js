const educationHistory = [
    { id: 1, period: '2022 - Sekarang', institution: 'Universitas Amikom Yogyakarta ', major: 'S1 -  Informatika' },
    { id: 2, period: '2019 - 2022', institution: 'SMK Muhammadiyah 1  Yogyakarta', major: 'Rekayasa Perangkat Lunak' }
  ];
  
  const skills = [
    { name: 'React.js', level: 'Mahir' },
    { name: 'CodeIgniter', level: 'Mahir' },
    { name: 'Laravel', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Menengah' },
    { name: 'Bootstrap CSS', level: 'Menengah' },
    { name: 'MySql', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' }
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