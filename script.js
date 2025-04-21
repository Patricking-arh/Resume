// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 完全加载');
    
    // Loading animation
    setTimeout(function() {
        document.querySelector('.loading-screen').classList.add('loading-hide');
        document.querySelector('.page-wrapper').classList.add('page-loaded');
        console.log('加载动画完成');
    }, 2000);
    
    // 手机联系弹窗功能
    function setupPhoneModal() {
        const phoneIcon = document.getElementById('phone-icon-profile');
        const phoneIconFooter = document.getElementById('phone-icon-footer');
        const phoneModal = document.getElementById('phone-modal');
        const closePhoneModal = document.getElementById('phone-modal-close');
        
        if (!phoneIcon || !phoneModal || !closePhoneModal) {
            console.error('Phone modal elements not found');
            return;
        }
        
        phoneIcon.addEventListener('click', function(e) {
            e.preventDefault();
            phoneModal.classList.add('show');
            console.log('Phone modal opened');
        });
        
        if (phoneIconFooter) {
            phoneIconFooter.addEventListener('click', function(e) {
                e.preventDefault();
                phoneModal.classList.add('show');
                console.log('Phone modal opened from footer');
            });
        }
        
        closePhoneModal.addEventListener('click', function() {
            phoneModal.classList.remove('show');
            console.log('Phone modal closed');
        });
        
        // 点击蒙版关闭弹窗
        phoneModal.addEventListener('click', function(e) {
            if (e.target === phoneModal) {
                phoneModal.classList.remove('show');
                console.log('Phone modal closed by overlay click');
            }
        });
        
        // 拨打电话按钮事件
        const phoneCallBtn = document.querySelector('.phone-call-btn');
        if (phoneCallBtn) {
            phoneCallBtn.addEventListener('click', function() {
                console.log('Call button clicked');
                // 调起FaceTime拨打电话
                window.location.href = 'facetime:+8618810301013';
                setTimeout(function() {
                    phoneModal.classList.remove('show');
                }, 500);
            });
        }
        
        console.log('Phone modal setup complete');
    }
    
    // 飞书二维码弹窗功能
    function setupFeishuModal() {
        const feishuIcon = document.getElementById('feishu-icon-profile');
        const feishuIconFooter = document.getElementById('feishu-icon-footer');
        const feishuModal = document.getElementById('feishu-modal');
        const closeFeishuModal = document.getElementById('feishu-modal-close');
        
        if (!feishuIcon || !feishuModal || !closeFeishuModal) {
            console.error('Feishu modal elements not found');
            return;
        }
        
        feishuIcon.addEventListener('click', function(e) {
            e.preventDefault();
            feishuModal.classList.add('show');
            console.log('Feishu modal opened');
        });
        
        if (feishuIconFooter) {
            feishuIconFooter.addEventListener('click', function(e) {
                e.preventDefault();
                feishuModal.classList.add('show');
                console.log('Feishu modal opened from footer');
            });
        }
        
        closeFeishuModal.addEventListener('click', function() {
            feishuModal.classList.remove('show');
            console.log('Feishu modal closed');
        });
        
        // 点击蒙版关闭弹窗
        feishuModal.addEventListener('click', function(e) {
            if (e.target === feishuModal) {
                feishuModal.classList.remove('show');
                console.log('Feishu modal closed by overlay click');
            }
        });
        
        console.log('Feishu modal setup complete');
    }
    
    // 微信二维码弹窗功能
    function setupWechatModal() {
        const wechatIcon = document.getElementById('wechat-icon-profile');
        const wechatIconFooter = document.getElementById('wechat-icon-footer');
        const wechatModal = document.getElementById('wechat-modal');
        const closeWechatModal = document.getElementById('wechat-modal-close');
        
        if (!wechatIcon || !wechatModal || !closeWechatModal) {
            console.error('Wechat modal elements not found');
            return;
        }
        
        wechatIcon.addEventListener('click', function(e) {
            e.preventDefault();
            wechatModal.classList.add('show');
            console.log('Wechat modal opened');
        });
        
        if (wechatIconFooter) {
            wechatIconFooter.addEventListener('click', function(e) {
                e.preventDefault();
                wechatModal.classList.add('show');
                console.log('Wechat modal opened from footer');
            });
        }
        
        closeWechatModal.addEventListener('click', function() {
            wechatModal.classList.remove('show');
            console.log('Wechat modal closed');
        });
        
        // 点击蒙版关闭弹窗
        wechatModal.addEventListener('click', function(e) {
            if (e.target === wechatModal) {
                wechatModal.classList.remove('show');
                console.log('Wechat modal closed by overlay click');
            }
        });
        
        console.log('Wechat modal setup complete');
    }
    
    // 初始化手机弹窗功能
    setupPhoneModal();
    
    // 初始化飞书弹窗功能
    setupFeishuModal();
    
    // 初始化微信弹窗功能
    setupWechatModal();
    
    // 设置联系表单发送消息弹窗功能
    function setupContactFormModal() {
        const submitBtn = document.querySelector('.submit-btn');
        
        if (!submitBtn) {
            console.error('Contact form submit button not found');
            return;
        }
        
        // 创建模态框元素
        const contactModal = document.createElement('div');
        contactModal.className = 'modal-base';
        contactModal.id = 'contact-form-modal';
        
        contactModal.innerHTML = `
            <div class="modal-content-base">
                <div class="modal-close-base" id="contact-form-modal-close">
                    <i class="fas fa-times"></i>
                </div>
                <h3 class="modal-title-base">温馨提示</h3>
                <p class="modal-subtitle-base">此为示例，如需沟通请通过电话、微信等方式联系我~</p>
            </div>
        `;
        
        // 添加到页面
        document.querySelector('.page-wrapper').appendChild(contactModal);
        
        const closeContactModal = document.getElementById('contact-form-modal-close');
        
        // 点击发送消息按钮显示弹窗
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取表单字段值
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // 表单验证
            if (!name || !email || !message) {
                // 显示错误提示
                let errorMessage = '请填写';
                if (!name) errorMessage += ' 您的姓名';
                if (!email) errorMessage += (!name ? '、' : ' ') + '您的邮箱';
                if (!message) errorMessage += ((!name || !email) ? '、' : ' ') + '留言内容';
                
                alert(errorMessage);
                console.log('表单验证失败:', errorMessage);
                return;
            }
            
            // 验证通过，显示弹窗
            contactModal.classList.add('show');
            console.log('Contact form modal opened');
        });
        
        // 点击关闭按钮关闭弹窗
        if (closeContactModal) {
            closeContactModal.addEventListener('click', function() {
                contactModal.classList.remove('show');
                console.log('Contact form modal closed');
            });
        }
        
        // 点击蒙版关闭弹窗
        contactModal.addEventListener('click', function(e) {
            if (e.target === contactModal) {
                contactModal.classList.remove('show');
                console.log('Contact form modal closed by overlay click');
            }
        });
        
        console.log('Contact form modal setup complete');
    }
    
    // 初始化联系表单弹窗功能
    setupContactFormModal();
    
    // 寰俊浜岀淮鐮佸脊绐
    const wechatIcon = document.getElementById('wechat-icon');
    const wechatModal = document.getElementById('wechat-modal');
    const closeModal = document.getElementById('wechat-modal-close');
    
    if (wechatIcon) {
        wechatIcon.addEventListener('click', function(e) {
            e.preventDefault();
            wechatModal.classList.add('active');
        });
    }
    
    // 鎵嬫満鍙风偣鍑诲脊绐
    const phoneContact = document.getElementById('phone-contact');
    
    if (phoneContact) {
        phoneContact.addEventListener('click', function() {
            alert('鍙嫧鎵 +86 18810301013 鑱旂郴');
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            wechatModal.classList.remove('active');
        });
    }
    
    if (wechatModal) {
        wechatModal.addEventListener('click', function(e) {
            if (e.target === wechatModal) {
                wechatModal.classList.remove('active');
            }
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    const scrollTop = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
            scrollTop.classList.add('active');
        } else {
            header.classList.remove('header-scrolled');
            scrollTop.classList.remove('active');
        }
        
        // Update breadcrumbs based on current section
        updateBreadcrumbs();
    });
    
    // Scroll to top
    scrollTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    function updateActiveNavLink() {
        // 获取当前滚动位置加上一个偏移量（考虑固定导航栏的高度）
        const scrollPosition = window.scrollY + 150;
        
        // 找到当前视口内最靠上的可见部分
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            // 判断当前滚动位置是否在此部分内
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // 特殊情况：页面顶部和底部
        if (window.scrollY < 300) {
            currentSection = 'home';
        }
        
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
            currentSection = document.querySelector('section:last-of-type').getAttribute('id');
        }
        
        // 更新导航项的激活状态
        navItems.forEach(item => {
            item.classList.remove('active');
            if (currentSection && item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }

    // Update breadcrumbs based on current section
    function updateBreadcrumbs() {
        const currentSection = document.getElementById('current-section');
        let activeSectionName = '涓婚〉';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 150) {
                const id = section.getAttribute('id');
                switch(id) {
                    case 'home': activeSectionName = '涓婚〉'; break;
                    case 'about': activeSectionName = '鍏充簬鎴�'; break;
                    case 'experience': activeSectionName = '宸ヤ綔缁忓巻'; break;
                    case 'projects': activeSectionName = '鍏抽敭椤圭洰'; break;
                    case 'skills': activeSectionName = '鎶€鑳�'; break;
                    case 'contact': activeSectionName = '鑱旂郴鎴�'; break;
                    default: activeSectionName = '涓婚〉';
                }
            }
        });
        
        currentSection.textContent = activeSectionName;
    }
    
    // Call once on page load
    updateActiveNavLink();
    updateBreadcrumbs();
    
    // And then on scroll with throttling to improve performance
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                updateActiveNavLink();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Form submission
    // 创建联系表单提交反馈弹窗
    function setupContactModal() {
        console.log('设置联系表单弹窗');
        // 检查是否已存在模态框
        let contactModal = document.getElementById('contact-modal');
        if (contactModal) {
            console.log('联系表单弹窗已存在');
            return contactModal;
        }
        
        // 创建模态框元素
        contactModal = document.createElement('div');
        contactModal.className = 'modal-base';
        contactModal.id = 'contact-modal';
        // 设置基础样式，确保弹窗可以正确显示
        contactModal.style.position = 'fixed';
        contactModal.style.top = '0';
        contactModal.style.left = '0';
        contactModal.style.width = '100%';
        contactModal.style.height = '100%';
        contactModal.style.display = 'flex';
        contactModal.style.justifyContent = 'center';
        contactModal.style.alignItems = 'center';
        contactModal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        contactModal.style.zIndex = '10000';
        contactModal.style.opacity = '0';
        contactModal.style.visibility = 'hidden';
        contactModal.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
        
        // 创建模态框内容
        contactModal.innerHTML = `
            <div class="modal-content-base">
                <div class="modal-close-base" id="contact-modal-close">
                    <i class="fas fa-times"></i>
                </div>
                <div class="phone-modal-icon">
                    <i class="fas fa-info-circle"></i>
                </div>
                <h3 class="modal-title-base">提示信息</h3>
                <p class="modal-subtitle-base">此为示例，如需联系我请通过电话、微信等方式~</p>
            </div>
        `;
        
        // 添加到页面
        document.body.appendChild(contactModal);
        console.log('联系表单弹窗已添加到DOM');
        
        // 添加关闭事件
        const closeContactModal = document.getElementById('contact-modal-close');
        if (closeContactModal) {
            closeContactModal.addEventListener('click', function() {
                contactModal.classList.remove('show');
                console.log('Contact modal closed');
            });
        }
        
        // 点击蒙版关闭弹窗
        contactModal.addEventListener('click', function(e) {
            if (e.target === contactModal) {
                contactModal.classList.remove('show');
                console.log('Contact modal closed by overlay click');
            }
        });
        
        return contactModal;
    }
    
    // 初始化联系表单提交反馈弹窗
    const contactModal = setupContactModal();
    
    // 确保在DOM加载完成后再获取表单元素
    const contactForm = document.querySelector('.contact-form');
    console.log('联系表单元素:', contactForm);
    
    // 由于表单按钮已改为type="button"，我们直接监听按钮点击事件
    if (contactForm) {
        // 获取提交按钮
        const submitBtn = contactForm.querySelector('.submit-btn');
        
        if (submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                console.log('提交按钮被点击');
                
                // 处理表单提交逻辑
                console.log('Contact form submitted - 使用按钮点击事件');
            
                // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !message) {
                // 显示详细的错误提示
                let errorMessage = '请填写';
                if (!name) errorMessage += ' 您的姓名';
                if (!email) errorMessage += (!name ? '、' : ' ') + '您的邮箱';
                if (!message) errorMessage += ((!name || !email) ? '、' : ' ') + '留言内容';
                
                alert(errorMessage);
                console.log('表单验证失败:', errorMessage);
                return false;
            }
            
            // 获取或创建联系表单弹窗
            let modal = document.getElementById('contact-modal');
            if (!modal) {
                console.log('联系表单弹窗不存在，重新创建');
                modal = setupContactModal();
            }
            
            // 确保弹窗已添加到DOM
            if (!document.body.contains(modal)) {
                document.body.appendChild(modal);
                console.log('联系表单弹窗已添加到DOM');
            }
            
            // 完全重置弹窗状态
            modal.classList.remove('show', 'active');
            modal.removeAttribute('style');
            
            // 强制重绘DOM
            void modal.offsetWidth;
            
            // 使用更简单的方式显示弹窗，主要依赖CSS类
            // 先设置基本样式确保可见
            modal.style.display = 'flex';
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            modal.style.pointerEvents = 'auto';
            
            // 强制重绘DOM以确保样式应用
            void modal.offsetWidth;
            
            // 添加show类，利用CSS中已定义的样式
            modal.classList.add('show');
            console.log('添加show类后的弹窗状态:', modal.className);
            
            // 使用setTimeout确保样式完全应用
            setTimeout(function() {
                // 确保弹窗显示
                if (!modal.classList.contains('show')) {
                    modal.classList.add('show');
                }
                // 确保内联样式已应用
                modal.style.display = 'flex';
                modal.style.opacity = '1';
                modal.style.visibility = 'visible';
                modal.style.pointerEvents = 'auto';
                console.log('确认弹窗显示状态:', modal.style.display, modal.style.opacity, modal.className);
            }, 100);
            
            // 确保内容也正确显示
            const modalContent = modal.querySelector('.modal-content-base');
            if (modalContent) {
                modalContent.style.transform = 'scale(1) translateY(0)';
            }
            
            console.log('联系表单弹窗已显示，类名:', modal.className);
            
            // 确保点击蒙版可以关闭弹窗
            modal.onclick = function(e) {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    console.log('联系表单弹窗通过点击蒙版关闭');
                }
            };
            
                // Reset form
                contactForm.reset();
            });
            
            console.log('联系表单按钮事件监听器已设置');
        } else {
            console.error('无法找到联系表单提交按钮');
        }
    } else {
        console.error('无法找到联系表单元素');
    }


    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.timeline-content, .project-card, .certification-item, .contact-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // Call once on page load
    animateOnScroll();
    
    // And then on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// 直接在全局定义筛选项目函数，确保可以被内联onclick事件调用
function filterProjects(company) {
    console.log('执行筛选功能, 筛选公司:', company);
    
    // 1. 更新按钮激活状态
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-company') === company) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 2. 筛选项目卡片
    const projectCards = document.querySelectorAll('.project-card');
    let visibleCount = 0;
    
    projectCards.forEach(card => {
        const cardCompany = card.getAttribute('data-company');
        
        if (company === 'all' || cardCompany === company) {
            // 显示符合条件的卡片
            card.style.display = '';
            visibleCount++;
        } else {
            // 隐藏不符合条件的卡片
            card.style.display = 'none';
        }
    });
    
    console.log(`筛选完成，显示了 ${visibleCount} 个项目，隐藏了 ${projectCards.length - visibleCount} 个项目`);
}


