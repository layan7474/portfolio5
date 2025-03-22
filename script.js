"use strict";
class ContactForm {
    constructor() {
        this.bindEvents();
        this.loadData();
    }
    // Method لحفظ البيانات في localStorage
    saveData() {
        var _a, _b, _c, _d, _e, _f;
        const name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
        const email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value;
        const role = (_c = document.getElementById("role")) === null || _c === void 0 ? void 0 : _c.value;
        const messageType = (_d = document.getElementById("rol")) === null || _d === void 0 ? void 0 : _d.value; // تأكد من صحة الـ ID في HTML
        const topic = (_e = document.getElementById("topic")) === null || _e === void 0 ? void 0 : _e.value;
        const message = (_f = document.getElementById("message")) === null || _f === void 0 ? void 0 : _f.value;
        if (!name || !email || !role || !messageType || !topic || !message) {
            alert("الرجاء ملء جميع الحقول قبل الإرسال.");
            return;
        }
        const formData = {
            name,
            email,
            role,
            messageType,
            topic,
            message,
        };
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        alert("تم حفظ البيانات بنجاح!");
    }
    // Method لمسح الحقول
    clearForm() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("role").value = "";
        document.getElementById("rol").value = "";
        document.getElementById("topic").value = "";
        document.getElementById("message").value = "";
    }
    // Method لتحميل البيانات من localStorage
    loadData() {
        const savedData = localStorage.getItem("contactFormData");
        if (savedData) {
            const formData = JSON.parse(savedData);
            document.getElementById("name").value = formData.name;
            document.getElementById("email").value = formData.email;
            document.getElementById("role").value = formData.role;
            document.getElementById("rol").value = formData.messageType;
            document.getElementById("topic").value = formData.topic;
            document.getElementById("message").value = formData.message;
        }
    }
    // Method لربط الأحداث
    bindEvents() {
        const sendButton = document.getElementById("send");
        if (sendButton) {
            sendButton.addEventListener("click", () => {
                this.saveData();
                this.clearForm();
            });
        }
    }
}
// إنشاء كائن من الفئة
const contactForm = new ContactForm();
// التعامل مع عنصر HTML معين
const myElement = document.getElementById("myElement");
if (myElement) {
    myElement.innerHTML = "تم تغيير النص!";
}
