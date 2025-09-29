import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ActivityPhase {
    title: string;
    duration: string;
    description: string;
    tasks: {
        title: string;
        content: string;
    }[];
}

interface EvaluationCriteria {
    dimension: string;
    content: string;
    weight: string;
}

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activityPhases: ActivityPhase[] = [{
        title: "信息收集与知识建构 —— '重器探秘'",
        duration: "2025.10.1-2025.10.7",
        description: "通过观看阅兵视频和资料搜集，建立对国防科技的基础认知",

        tasks: [{
            title: "建立'重器档案'",
            content: "选择一个方阵作为研究对象，收集1-2种核心装备的图片、参数和特点，填写探秘卡"
        }, {
            title: "科技元素深度分析",
            content: "深入研究装备背后的1-2项核心科技，可以用思维导图或简报形式整理"
        }]
    }, {
        title: "创意设计与帽子制作 ",
        duration: "2025.10.8-2025.10.29",
        description: "将科技知识转化为创意作品，动手制作独特的'国之重器创意帽'",

        tasks: [{
            title: "方向A：致敬经典-模型复刻版",
            content: "用环保材料或购买军事装备纸模型制作微缩模型，巧妙固定在帽子上"
        }, {
            title: "方向B：我的设计-未来畅想版",
            content: "基于现有科技（如隐形、人工智能、激光武器等），畅想未来单兵装备或体系化作战平台，并设计在帽子上"
        }]
    }, {
        title: "成果展示与交流 —— 科技节开幕式",
        duration: "2025.11.3",
        description: "在第十五届科技节开幕式上展示研究成果和创意作品",

        tasks: [{
            title: "军事装备'国之重器'创意秀",
            content: "展示'创意帽'和前期研究的'重器档案'"
        }, {
            title: "班级互动投票",
            content: "评选'最佳创意奖'、'最佳科技奖'、'最佳造型奖'等"
        }]
    }];

    const evaluationCriteria: EvaluationCriteria[] = [{
        dimension: "研究过程 (40%)",
        content: "'重器档案'的完整性与准确性；对科技元素分析的深度。",
        weight: "40%"
    }, {
        dimension: "创意设计 (30%)",
        content: "创意帽的创意新颖度、与科技主题的契合度、设计图的合理性。",
        weight: "30%"
    }, {
        dimension: "作品制作 (30%)",
        content: "手工制作精美度、材料运用的巧妙性、整体美观效果。",
        weight: "30%"
    }];

    const techElements = [{
        title: "隐形技术",
        description: "通过特殊外形设计和吸波材料，使雷达难以发现（如歼-20、攻击-11）。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Stealth%20technology%20illustration%2C%20invisible%20aircraft%2C%20children%20friendly%2C%20cartoon%20style&sign=ae5308c443eee790f6ccb0764c8aca43"
    }, {
        title: "高超音速技术",
        description: "飞行速度超过5倍音速，轨迹多变，现有防御系统难以拦截（如东风-17）。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Hypersonic%20technology%20illustration%2C%20fast%20missile%2C%20children%20friendly%2C%20cartoon%20style&sign=5e586354dc09f53861a041082badf4cf"
    }, {
        title: "人工智能与无人集群技术",
        description: "无人机可以编队飞行，自主协同执行侦察、攻击等任务，体现'蜂群'智能。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=AI%20drone%20swarm%20technology%2C%20children%20friendly%2C%20cartoon%20style&sign=499919dd94764addb68817c37c3f2fe4"
    }, {
        title: "综合信息系统",
        description: "实现战场信息实时共享，各作战单元互联互通，提升整体作战效能。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Integrated%20information%20system%2C%20battlefield%20data%20sharing%2C%20children%20friendly%2C%20cartoon%20style&sign=7e55e8b9ec92ddca8821b45befdb0a14"
    }, {
        title: "新材料技术",
        description: "复合材料、隐形材料等应用，提高装备性能、减轻重量、增强防护能力。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=New%20materials%20technology%2C%20composite%20materials%2C%20stealth%20materials%2C%20children%20friendly%2C%20cartoon%20style&sign=ed1be79fb9f8100fd12f611d6ccec4d6"
    }, {
        title: "新能源与动力技术",
        description: "高效发动机与绿色能源应用，提升装备续航能力，降低环境影响。",
        imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=New%20energy%20technology%2C%20efficient%20engine%2C%20green%20energy%2C%20children%20friendly%2C%20cartoon%20style&sign=2c492e8076ef793a59570d26e3d33f1d"
    }];

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
            {}
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
                )}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <img
                            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/291411938818/attachment/校徽2_20250928141212.png"
                            alt="校徽"
                            className="h-10 w-auto" />
                        <span
                            className="font-bold text-lg text-blue-700"
                            style={{
                                fontFamily: "\"Noto Serif SC\", serif",
                                fontSize: "18px"
                            }}>上海外国语大学松江外国语学校</span>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a
                                    href="/"
                                    className="text-sm font-medium hover:text-blue-600 transition-colors">首页</a></li>
                            <li><a
                                    href="#about"
                                    className="text-sm font-medium hover:text-blue-600 transition-colors">关于活动</a></li>
                            <li><a
                                    href="#phases"
                                    className="text-sm font-medium hover:text-blue-600 transition-colors">活动流程</a></li>
                            <li><a
                                    href="#resources"
                                    className="text-sm font-medium hover:text-blue-600 transition-colors">资源支持</a></li>
                            <li><a
                                    href="#awards"
                                    className="text-sm font-medium hover:text-blue-600 transition-colors">奖项设置</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="pt-20">
                {}
                <section
                    className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
                    <div className="absolute inset-0 opacity-20">
                        <div
                            className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chinese%20military%20parade%20equipment%2C%20children%20friendly%2C%20cartoon%20style&sign=9d294f08464c9cc7f56abd1dd5cbc141')] bg-cover bg-center"></div>
                    </div>
                    <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            className="max-w-3xl mx-auto text-center">
                            <h1
                                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                                style={{
                                    fontSize: "24px"
                                }}>创生者，行天下｜ 致敬🫡我的国
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </h1>
                            <p className="text-2xl md:text-3xl font-semibold mb-8">——探秘国之重器</p>
                            <p
                                className="text-2xl md:text-3xl font-semibold mb-8"
                                style={{
                                    fontFamily: "\"Noto Serif SC\", serif",
                                    textDecoration: "none",
                                    fontWeight: "bold"
                                }}>第十五届上外松外创智科技节创意帽子秀</p>
                            <p className="text-lg md:text-xl opacity-90 mb-10">一场融合国防科技学习与创意实践的精彩旅程，<br />让我们一起探索国家重器背后的科技奥秘！</p>
                            <div
                                className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">活动时间：2025.10.1-2025.11.3</div>
                        </motion.div>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
                </section>
                {}
                <section id="tech" className="py-20 bg-gradient-to-b from-blue-50 to-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            viewport={{
                                once: true
                            }}>
                            <h2 className="text-3xl font-bold text-center mb-16 text-blue-800">军事装备中的尖端科技</h2>
                            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">2025年阅兵式上，中国展示了众多先进武器装备，它们不仅是国家实力的象征，更是科技创新的结晶！</p>
                            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">探索现代军事装备背后的关键技术创新，了解国防科技的前沿发展</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {techElements.map((tech, index) => <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 20
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-blue-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={tech.imageUrl}
                                            alt={tech.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 text-blue-700">{tech.title}</h3>
                                        <p className="text-gray-600">{tech.content}</p>
                                    </div>
                                </motion.div>)}
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section id="about" className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            viewport={{
                                once: true
                            }}>
                            <h2 className="text-3xl font-bold text-center mb-16 text-blue-800">关于本次活动</h2>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-6 text-blue-700">活动目标</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                                                <i className="fa-solid fa-lightbulb text-blue-600"></i>
                                            </div>
                                            <div>
                                                <span className="text-gray-700">了解2025年阅兵式上展示的主要军事装备的分类及其核心科技原理。</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                                                <i className="fa-solid fa-cogs text-blue-600"></i>
                                            </div>
                                            <div>
                                                <span className="text-gray-700">提升信息搜集与筛选、创意设计、动手制作与表达展示的综合能力。</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                                                <i className="fa-solid fa-heart text-blue-600"></i>
                                            </div>
                                            <div>
                                                <span className="text-gray-700">关注国防科技，感受国家强大的综合国力，增强民族自豪感、科学素养与爱国情怀。</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-700">活动对象</h3>
                                    <p className="text-gray-700 mb-6">一~九年级学生</p>
                                </div>
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                    <img
                                        src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Students%20doing%20science%20project%2C%20military%20technology%20model%2C%20happy%20children%2C%20colorful%2C%20cartoon%20style&sign=53756a1df23ed9e4fbfcbfaaa4e0d244"
                                        alt="学生参与科技活动"
                                        className="w-full h-64 object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section id="phases" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            viewport={{
                                once: true
                            }}>
                            <h2 className="text-3xl font-bold text-center mb-16 text-blue-800">活动流程</h2>
                            <div className="relative">
                                {}
                                <div
                                    className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
                                <div className="space-y-20">
                                    {activityPhases.map((phase, index) => <div
                                        key={index}
                                        className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                        <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100">
                                                <span
                                                    className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                                                    {phase.duration}
                                                </span>
                                                <h3 className="text-2xl font-semibold mb-4 text-blue-700">{phase.title}</h3>
                                                <p className="text-gray-700 mb-6">{phase.description}</p>
                                                <div className="space-y-4">
                                                    {phase.tasks.map((task, taskIndex) => <div
                                                        key={taskIndex}
                                                        className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                                        <h4 className="font-semibold text-blue-600 mb-2">{task.title}</h4>
                                                        <p className="text-gray-600 text-sm">{task.content}</p>
                                                    </div>)}
                                                </div>
                                            </div>
                                        </div>
                                        {}
                                        <div className="z-10 relative">
                                            <div
                                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-white font-bold">{index + 1}</span>
                                            </div>
                                        </div>
                                        {}
                                        <div className="md:w-1/2 md:pl-16"></div>
                                    </div>)}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {}
                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            viewport={{
                                once: true
                            }}>
                            <h2 className="text-3xl font-bold text-center mb-16 text-blue-800">活动支持</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {}
                                <div
                                    id="awards"
                                    className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 h-full">
                                    <h3 className="text-2xl font-semibold text-center mb-8 text-blue-700">奖项设置</h3>
                                    <div className="space-y-6">
                                        <div
                                            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1 mr-4">
                                                    <div className="flex items-center mb-3">
                                                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                                                            <i className="fa-solid fa-trophy text-yellow-500 text-xl"></i>
                                                        </div>
                                                        <h4 className="text-lg font-semibold text-blue-700">最佳探索奖</h4>
                                                    </div>
                                                    <></>
                                                    <></>
                                                </div>
                                                <img
                                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Military%20technology%20exploration%2C%20magnifying%20glass%20and%20military%20equipment%2C%20children%20friendly%2C%20cartoon%20style&sign=100e6c386e3d4cd65ddc3a54f6c540b9"
                                                    alt="最佳探索主题"
                                                    className="h-24 w-24 object-contain rounded-lg shadow-sm border border-gray-100" />
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1 mr-4">
                                                    <div className="flex items-center mb-3">
                                                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                                                            <i className="fa-solid fa-lightbulb text-blue-500 text-xl"></i>
                                                        </div>
                                                        <h4 className="text-lg font-semibold text-blue-700">最佳创意奖</h4>
                                                    </div>
                                                    <></>
                                                    <></>
                                                </div>
                                                <img
                                                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Creative%20military%20technology%20design%2C%20innovative%20weapon%20concept%2C%20children%20friendly%2C%20cartoon%20style&sign=a6a24e146f5bd9aa92c5ba789386afda"
                                                    alt="最佳创意主题"
                                                    className="h-24 w-24 object-contain rounded-lg shadow-sm border border-gray-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {}
                                <div
                                    id="resources"
                                    className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 h-full">
                                    <h3 className="text-2xl font-semibold text-center mb-8 text-blue-700">资源支持</h3>
                                    <div className="h-full flex flex-col">
                                        <div className="flex flex-col space-y-6 flex-grow">
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                                                    <i className="fa-solid fa-video text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-blue-800 mb-1">阅兵式视频资料</h4>
                                                    <p className="text-gray-600 text-sm"><a
                                                            href="https://www.bilibili.com/video/BV17AndzHEV3/?spm_id_from=333.337.search-card.all.click&vd_source=4203441c9b1b7e84232fd08263f21ef6"
                                                            className="text-blue-600 hover:underline">《9.3阅兵，国防新装备大盘点！》</a></p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                                                        <i className="fa-solid fa-video text-blue-600"></i>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-blue-800 mb-1">军事纪实视频</h4>
                                                        <p className="text-gray-600 text-sm"><a
                                                                href="https://www.bilibili.com/video/BV1JgnuzFEy8?spm_id_from=333.788.videopod.sections&vd_source=4203441c9b1b7e84232fd08263f21ef6"
                                                                className="text-blue-600 hover:underline">《军事纪实：胜利日 大阅兵》</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                                                    <i className="fa-solid fa-video text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-blue-800 mb-1">军事科普视频</h4>
                                                    <p className="text-gray-600 text-sm"><a
                                                            href="https://www.bilibili.com/video/BV1E1hZzdEbF/?spm_id_from=333.337.search-card.all.click&vd_source=4203441c9b1b7e84232fd08263f21ef6"
                                                            className="text-blue-600 hover:underline">《9.3阅兵场上的物理课：大国重器背后的科学密码》</a></p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                                                    <i className="fa-solid fa-video text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-blue-800 mb-1">军事科普视频</h4>
                                                    <p className="text-gray-600 text-sm"><a
                                                            href="https://www.bilibili.com/video/BV1tXhBzJEef?spm_id_from=333.788.recommend_more_video.0&vd_source=4203441c9b1b7e84232fd08263f21ef6"
                                                            className="text-blue-600 hover:underline">《大国重器当中的传感器》</a></p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                                                    <i className="fa-solid fa-globe text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-blue-800 mb-1">权威军事科普网站</h4>
                                                    <p className="text-gray-600 text-sm"><a href="http://www.81.cn" className="text-blue-600 hover:underline">《中国军网》</a></p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                                                    <i className="fa-solid fa-tools text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-blue-800 mb-1">手工制作参考资源</h4>
                                                    <p className="text-gray-600 text-sm">在小红书搜索“手工军事装备模型教程”，在淘宝搜索“军事纸模型”等</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-600 text-white p-6 text-center rounded-lg mt-6">
                                            <h3 className="text-lg font-semibold mb-2">立即参与活动</h3>
                                            <p className="mb-4 opacity-90 text-sm">第十五届科技节开幕式：11月3日</p>
                                            <button
                                                className="bg-white text-blue-600 font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-sm text-sm">了解更多
                                                                                                                                                                                                                                                                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            {}
            <footer className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center space-x-2 justify-center md:justify-start">
                                <i className="fa-solid fa-rocket text-blue-300 text-xl"></i>
                                <span className="font-bold text-xl">探秘国之重器</span>
                            </div>
                            <p className="text-blue-300 text-sm mt-2 text-center md:text-left">创生者，行天下｜致敬我的国</p>
                        </div>
                        <div className="text-blue-300 text-sm">© 2025 上外松外科技节活动组委会. 保留所有权利.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}