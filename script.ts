class ContactForm {
    constructor() {
        this.bindEvents();
        this.loadData();
    }

    // Method لحفظ البيانات في localStorage
    saveData(): void {
        const name = (document.getElementById("name") as HTMLInputElement)?.value;
        const email = (document.getElementById("email") as HTMLInputElement)?.value;
        const role = (document.getElementById("role") as HTMLSelectElement)?.value;
        const messageType = (document.getElementById("rol") as HTMLSelectElement)?.value; // تأكد من صحة الـ ID في HTML
        const topic = (document.getElementById("topic") as HTMLInputElement)?.value;
        const message = (document.getElementById("message") as HTMLTextAreaElement)?.value;

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
    clearForm(): void {
        (document.getElementById("name") as HTMLInputElement).value = "";
        (document.getElementById("email") as HTMLInputElement).value = "";
        (document.getElementById("role") as HTMLSelectElement).value = "";
        (document.getElementById("rol") as HTMLSelectElement).value = "";
        (document.getElementById("topic") as HTMLInputElement).value = "";
        (document.getElementById("message") as HTMLTextAreaElement).value = "";
    }

    // Method لتحميل البيانات من localStorage
    loadData(): void {
        const savedData = localStorage.getItem("contactFormData");
        if (savedData) {
            const formData: { name: string; email: string; role: string; messageType: string; topic: string; message: string } = JSON.parse(savedData);

            (document.getElementById("name") as HTMLInputElement).value = formData.name;
            (document.getElementById("email") as HTMLInputElement).value = formData.email;
            (document.getElementById("role") as HTMLSelectElement).value = formData.role;
            (document.getElementById("rol") as HTMLSelectElement).value = formData.messageType;
            (document.getElementById("topic") as HTMLInputElement).value = formData.topic;
            (document.getElementById("message") as HTMLTextAreaElement).value = formData.message;
        }
    }

    // Method لربط الأحداث
    bindEvents(): void {
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
