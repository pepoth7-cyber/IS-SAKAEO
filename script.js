// Sakaeo Travel Website JavaScript

// Attraction data with detailed information
const attractionData = {
    'อุทยานแห่งชาติปางสีดา': {
        title: 'อุทยานแห่งชาติปางสีดา',
        emoji: '🌿',
        rating: '4.7',
        price: 'ผู้ใหญ่ 40 บ. เด็ก 20 บ.',
        hours: '06:00–18:00 น.',
        highlights: [
            'น้ำตกปางสีดา สวยงาม เล่นน้ำได้',
            'แหล่งชมผีเสื้อที่ใหญ่ที่สุดในไทย',
            'เส้นทางเดินป่าและดูนก'
        ],
        tips: [
            'เหมาะมาเที่ยวช่วง พ.ค.–ก.ค. (ฤดูผีเสื้อ)',
            'เตรียมยากันยุง และรองเท้าผ้าใบ'
        ],
        facilities: ['ที่จอดรถ', 'ห้องน้ำ', 'ร้านค้า', 'จุดกางเต็นท์'],
        description: 'พื้นที่ป่าใหญ่ที่อุดมสมบูรณ์ มีทั้งน้ำตก เส้นทางศึกษาธรรมชาติ และเป็นแหล่งผีเสื้อที่มีชื่อเสียง'
    },
    'น้ำตกปางสีดา': {
        title: 'น้ำตกปางสีดา',
        emoji: '💦',
        rating: '4.8',
        price: 'ฟรี (เสียค่าเข้าอุทยาน 40 บ.)',
        hours: '06:00–18:00 น.',
        highlights: [
            'น้ำใสเย็นสบาย',
            'บรรยากาศธรรมชาติร่มรื่น',
            'เดินทางไม่ไกลจากตัวเมือง'
        ],
        tips: [
            'เวลาเหมาะ: 08:00–16:00 น.',
            'ควรใส่รองเท้ากันลื่น'
        ],
        facilities: ['ที่จอดรถ', 'ห้องน้ำ', 'ร้านค้า', 'จุดพักผ่อน'],
        description: 'น้ำตกสวยกลางป่าในอุทยานฯ มีน้ำไหลตลอดปี เหมาะกับพักผ่อนและถ่ายรูป'
    },
    'ปราสาทสด๊กก๊อกธม': {
        title: 'ปราสาทสด๊กก๊อกธม',
        emoji: '🏯',
        rating: '4.6',
        price: 'ฟรี',
        hours: '08:00–16:30 น.',
        highlights: [
            'ปราสาทหินขอมโบราณ ศิลปะงดงาม',
            'ศิลาจารึกเก่าแก่ที่สุดในไทย',
            'เหมาะกับสายประวัติศาสตร์'
        ],
        tips: [
            'เวลาเหมาะ: 08:00–16:30 น.',
            'ควรพกหมวก/ร่ม เพราะแดดแรง'
        ],
        facilities: ['ที่จอดรถ', 'ห้องน้ำ', 'ศูนย์ข้อมูล'],
        description: 'โบราณสถานขอมขนาดใหญ่ที่สุดในภาคตะวันออก อายุกว่าพันปี'
    },
    'ละลุ': {
        title: 'ละลุ',
        emoji: '🏜',
        rating: '4.5',
        price: 'ฟรี',
        hours: '06:00–18:00 น.',
        highlights: [
            'คล้ายแกรนด์แคนยอนขนาดย่อม',
            'จุดถ่ายรูปสวย',
            'ธรรมชาติสร้างสรรค์รูปร่างแปลกตา'
        ],
        tips: [
            'เหมาะมาเที่ยวช่วงเช้า/เย็น แดดไม่ร้อน',
            'ใส่รองเท้าผ้าใบสะดวกเดิน'
        ],
        facilities: ['ที่จอดรถ', 'ห้องน้ำ'],
        description: 'ปรากฏการณ์ทางธรรมชาติ ดินทรุดตัวจนเกิดเป็นแท่งหินและหน้าผารูปทรงแปลกตา'
    },
    'วัดถ้ำเขาฉกรรจ์': {
        title: 'วัดถ้ำเขาฉกรรจ์',
        emoji: '🏞',
        rating: '4.7',
        price: 'ฟรี',
        hours: '06:00–18:00 น.',
        highlights: [
            'บันไดกว่า 300 ขั้น ขึ้นไปชมวิว',
            'มีถ้ำและรอยพระพุทธบาทจำลอง',
            'จุดชมวิวมุมสูงเมืองสระแก้ว'
        ],
        tips: [
            'พกน้ำดื่มและหมวก',
            'ควรมาเช้า/เย็น แดดไม่แรง'
        ],
        facilities: ['ที่จอดรถ', 'ห้องน้ำ'],
        description: 'วัดบนภูเขาหินปูน มีถ้ำและจุดชมวิว เหมาะสำหรับสายธรรมะ + ถ่ายภาพ'
    },
    'ตลาดโรงเกลือ': {
        title: 'ตลาดโรงเกลือ (อรัญประเทศ)',
        emoji: '🛍',
        rating: '4.4',
        price: 'ฟรี',
        hours: '07:00–17:00 น.',
        highlights: [
            'สวรรค์นักช้อป สินค้าหลากหลาย',
            'เสื้อผ้า ของใช้ ของตกแต่งราคาถูก',
            'ของฝากท้องถิ่น'
        ],
        tips: [
            'เหมาะมาเช้า ๆ อากาศไม่ร้อน',
            'ต่อรองราคาก่อนซื้อ'
        ],
        facilities: ['ที่จอดรถ', 'ห้องน้ำ', 'ร้านอาหาร'],
        description: 'ตลาดใหญ่ติดชายแดนกัมพูชา ขึ้นชื่อเรื่องสินค้าราคาถูกและของใช้หลากหลาย'
    }
};

// Smooth scrolling functions
function scrollToAttractions() {
    document.getElementById('attractions').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth'
    });
}

// Show attraction details in modal
function showDetails(attractionName) {
    const attraction = attractionData[attractionName];
    if (!attraction) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="relative">
            <button onclick="closeModal()" class="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            
            <div class="h-64 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                <div class="text-8xl">${attraction.emoji}</div>
            </div>
            
            <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-3xl font-bold text-gray-800">${attraction.title}</h3>
                    <div class="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                        <span class="text-yellow-500 mr-1">⭐</span>
                        <span class="font-semibold">${attraction.rating}</span>
                    </div>
                </div>
                
                <p class="text-gray-600 mb-6 text-lg">${attraction.description}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-blue-800 mb-2">💰 ค่าเข้าชม</h4>
                        <p class="text-blue-700">${attraction.price}</p>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-green-800 mb-2">🕘 เวลาเปิด-ปิด</h4>
                        <p class="text-green-700">${attraction.hours}</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h4 class="font-semibold text-gray-800 mb-3">✨ จุดเด่น</h4>
                    <ul class="space-y-2">
                        ${attraction.highlights.map(highlight => `
                            <li class="flex items-start">
                                <span class="text-green-500 mr-2 mt-1">•</span>
                                <span class="text-gray-700">${highlight}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="mb-6">
                    <h4 class="font-semibold text-gray-800 mb-3">💡 เคล็ดลับ</h4>
                    <ul class="space-y-2">
                        ${attraction.tips.map(tip => `
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2 mt-1">•</span>
                                <span class="text-gray-700">${tip}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="mb-8">
                    <h4 class="font-semibold text-gray-800 mb-3">🏞 สิ่งอำนวยความสะดวก</h4>
                    <div class="flex flex-wrap gap-2">
                        ${attraction.facilities.map(facility => `
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">${facility}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4">
                    <button onclick="bookPackage('${attraction.title}')" class="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all">
                        🎫 จองทริป
                    </button>
                    <button onclick="openMap('${attraction.title}')" class="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                        🗺️ ดูแผนที่
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('attractionModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('attractionModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('attractionModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Book package function
function bookPackage(packageName) {
    // Show booking confirmation
    const confirmation = confirm(`คุณต้องการจอง "${packageName}" ใช่หรือไม่?\n\nเราจะติดต่อกลับภายใน 24 ชั่วโมง`);
    
    if (confirmation) {
        // Simulate booking process
        const bookingId = 'SK' + Date.now().toString().slice(-6);
        
        alert(`🎉 จองสำเร็จ!\n\nรหัสการจอง: ${bookingId}\nแพ็คเกจ: ${packageName}\n\nเราจะติดต่อกลับเพื่อยืนยันรายละเอียดภายใน 24 ชั่วโมง\n\nขอบคุณที่เลือกใช้บริการ! 🙏`);
        
        // Close modal if open
        closeModal();
        
        // Scroll to contact section
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Open map function
function openMap(location = 'สระแก้ว') {
    const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(location + ' สระแก้ว')}`;
    window.open(mapUrl, '_blank');
}

// Send message function
function sendMessage(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    if (!name || !email || !message) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }
    
    // Simulate sending message
    const messageId = 'MSG' + Date.now().toString().slice(-6);
    
    alert(`📧 ส่งข้อความสำเร็จ!\n\nรหัสข้อความ: ${messageId}\nชื่อ: ${name}\nอีเมล: ${email}\n\nเราจะตอบกลับภายใน 24 ชั่วโมง\nขอบคุณที่ติดต่อเรา! 🙏`);
    
    // Reset form
    form.reset();
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation to cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Handle escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Add loading states for buttons
function addLoadingState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="pulse">กำลังดำเนินการ...</span>';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Add click handlers for booking buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('booking-btn')) {
        addLoadingState(e.target);
    }
});

// Initialize the website
console.log('🏞️ เที่ยวสระแก้ว - Website Loaded Successfully!');
console.log('📍 Attractions loaded:', Object.keys(attractionData).length);