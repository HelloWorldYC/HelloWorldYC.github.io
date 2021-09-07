(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{472:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"px4开发环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4开发环境搭建"}},[s._v("#")]),s._v(" PX4开发环境搭建")]),s._v(" "),a("h3",{attrs:{id:"搭建步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建步骤"}},[s._v("#")]),s._v(" 搭建步骤")]),s._v(" "),a("p",[a("strong",[s._v("（1）添加用户到 dialout 工作组")]),a("br"),s._v("\n将创建的用户加入到用户组 dialout 中去，注销后重新登录。"),a("br"),s._v("\n创建独立用户的目的是这样可以让开发环境分离开来，避免出现不同用户间的版本冲突等情况。"),a("br"),s._v("\n将用户加入dialout用户组的目的是dialout拥有对串口tty的操作权限。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G dialout "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])])]),a("p",[a("strong",[s._v("（2）安装软件包")]),a("br"),s._v("\n更新软件源列表：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update -y\n")])])]),a("p",[s._v("安装git、zip、cmake、qt、ninja等必用软件包：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" qtcreator cmake build-essential genromfs ninja-build exiftool -y\n")])])]),a("p",[s._v("安装常用python依赖包及管理工具：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-argparse python-empy python-toml python-numpy python-yaml python-dev python-pip -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --upgrade pip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pandas jinja2 pyserial cerberus\n")])])]),a("p",[a("strong",[s._v("（3）安装日志分析工具")]),a("br"),s._v("\nPyulog可以帮助处理 px4 的日志文件，尤其是在提取单个 topic 的数据时非常方便，建议安装。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pyulog\n")])])]),a("p",[a("strong",[s._v("（4）安装Gazebo仿真软件")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依赖包安装：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" protobuf-compiler libeigen3-dev libopencv-dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置软件包的来源：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo \"deb http://packages.osrfoundation.org/gazebo/ubuntu-stable `lsb_release -cs` main\" > /etc/apt/sources.list.d/gazebo-stable.list'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置软件包密钥:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://packages.osrfoundation.org/gazebo.key -O - "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新软件源列表:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装Gazebo:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gazebo9 -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装Gazebo9的依赖包：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libgazebo9-dev -y\n")])])]),a("ul",[a("li",[s._v("更正：gazebo 还是要用版本7的，用9的可能有问题")])]),s._v(" "),a("p",[a("strong",[s._v("（5）安装ROS和MAVROS")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置软件包的来源：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo \"deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main\" > /etc/apt/sources.list.d/ros-latest.list'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置软件包密钥:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 0xB01FA116")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key F42ED6FBAB17C654\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新软件源列表:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装基础版ROS和MAVROS：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y ros-kinetic-ros-base ros-kinetic-mavros ros-kinetic-mavros-extras\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 证书问题：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" c_rehash /etc/ssl/certs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MAVROS支持包：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" geographiclib-get-geoids egm96-5\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rosdep初始化：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" rosdep init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rosdep更新：")]),s._v("\nrosdep update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置ros运行环境：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source /opt/ros/kinetic/setup.bash"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/ros/kinetic/setup.bash\n")])])]),a("p",[a("strong",[s._v("（6）安装交叉编译器")]),a("br"),s._v("\n在"),a("a",{attrs:{href:"https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1),s._v(" 下载gcc，建议"),a("code",[s._v("2017-q4")]),s._v("版本，也可在百度网盘下载。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压缩：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -jxf gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置编译环境，将编译器的路径放到.bashrc或者.profile文件中：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/myc/gcc/gcc-arm-none-eabi-7-2017-q4-major/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加完后更新.bashrc文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看编译器版本确认是否配置成功：")]),s._v("\narm-none-eabi-gcc --version\n")])])]),a("p",[a("strong",[s._v("（7）安装QGC")]),s._v("\n在安装之前，先运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G dialout "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove modemmanager -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y\n")])])]),a("p",[s._v("重新登录使设置生效，接着下载 "),a("code",[s._v("QGroundControl.AppImage")]),s._v(" ，再进入到 QGC 目录运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ./QGroundControl.AppImage\n./QGroundControl.AppImage\n")])])]),a("p",[a("strong",[s._v("（8）安装PX4源码")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载代码：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PX4/Firmware.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新子模块：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Firmware \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --init --recursive\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译：（这一步是编译可以烧写到PX4上的固件，不修改固件的不一定需要用到）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_fmu-v3_default   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#（不一定是v3版本，还可能是v4 或 v2）")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译后上传：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_fmu-v3_default upload\n")])])]),a("p",[a("strong",[s._v("（9）环境配置验证")]),a("br"),s._v("\n打开一个 Terminal，进入到 px4 文件夹下，输入以下指令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo\n")])])]),a("br"),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"安装过程出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装过程出现的问题"}},[s._v("#")]),s._v(" 安装过程出现的问题：")]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("sudo apt-get update")]),s._v(" 时出错：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("W: GPG 错误：http://packages.ros.org/ros/ubuntu xenial InRelease: 由于没有公钥，无法验证下列签名： NO_PUBKEY F42ED6FBAB17C654\nW: 仓库 “http://packages.ros.org/ros/ubuntu xenial InRelease” 没有数字签名。\nN: 无法认证来自该源的数据，所以使用它会带来潜在风险。\nN: 参见 apt-secure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 手册以了解仓库创建和用户配置方面的细节。\n")])])]),a("p",[s._v("解决方案："),a("br"),s._v("\n设置软件包密钥时，其最后的码要根据不同的电脑进行修改，根据错误中的提示修改，即修改"),a("br"),s._v(" "),a("code",[s._v("sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 0xB01FA116")]),s._v("为"),a("br"),s._v(" "),a("code",[s._v("sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key F42ED6FBAB17C654")]),s._v(" "),a("br"),s._v(" "),a("br")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("在"),a("code",[s._v("sudo rosdep init")]),s._v(" 时出错：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ERROR: cannot download default sources list from:\nhttps://raw.githubusercontent.com/ros/rosdistro/master/rosdep/sources.list.d/20-default.list\nWebsite may be down.\n")])])]),a("p",[s._v("问题原因："),a("code",[s._v("raw.githubusercontent.com")]),s._v("网站不能访问，需要修改 hosts 文件，添加新网站的 ip 地址。"),a("br"),s._v("\n解决方案："),a("br"),s._v("\n打开终端，输入"),a("code",[s._v("sudo gedit /etc/hosts")]),s._v("。"),a("br"),s._v("\n在打开的文本最后添加："),a("code",[s._v("199.232.28.133 raw.githubusercontent.com")]),s._v("。"),a("br"),s._v("\n保存并退出，在终端中输入："),a("code",[s._v("sudo rosdep init")]),s._v("。"),a("br"),s._v("\n然后再输入："),a("code",[s._v("rosdep update")]),s._v("。\n"),a("br"),s._v(" "),a("br")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("当修改环境变量.bashrc文件后source出错时，重新修改回去，将错误的路径删掉：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/usr/bin"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gedit ~/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改完后更新环境变量")]),s._v("\n")])])]),a("br"),s._v(" "),a("ul",[a("li",[a("strong",[s._v("安装 QGC 时执行"),a("code",[s._v("sudo apt-get remove modemmanager -y")]),s._v("命令出错：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("E: 无法获得锁 /var/lib/dpkg/lock-frontend - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(": 资源暂时不可用"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nE: 无法获取 dpkg 前端锁 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/var/lib/dpkg/lock-frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，是否有其他进程正占用它？\n")])])]),a("p",[s._v("问题原因：可能是上次安装时没正常完成，而导致出现此状况。"),a("br"),s._v("\n解决方案：将原先的"),a("code",[s._v("apt-get")]),s._v("进程杀死，重新激活新的"),a("code",[s._v("apt-get")]),s._v("进程，就可以让软件管理器正常工作了。查看"),a("code",[s._v("apt-get")]),s._v("的相关进程："),a("code",[s._v("ps -e | grep apt")]),s._v("，然后将显示的进程杀死："),a("code",[s._v("sudo kill [进程号]")]),s._v(" "),a("br"),s._v(" "),a("br")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("在安装QGC时执行"),a("code",[s._v("sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y")]),s._v("出错：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("E: 无法定位软件包 gstreamer1.0-gl\nE: 无法按照 glob ‘gstreamer1.0-gl’ 找到任何软件包\nE: 无法按照正则表达式 gstreamer1.0-gl 找到任何软件包\n")])])]),a("br"),s._v(" "),a("ul",[a("li",[a("strong",[s._v("在下载PX4源码更新子模块"),a("code",[s._v("git submodule update --init –-recursive")]),s._v("时出错：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("error: pathspec "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'–-recursive'")]),s._v(" did not match any file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" known to git.\n")])])]),a("p",[s._v("原因：上面的"),a("code",[s._v("--recursive")]),s._v("打错了，最好手打。"),a("br"),s._v("\n若还是有问题，试试在"),a("code",[s._v("git submodule update --init --recursive")]),s._v("前先输入"),a("code",[s._v("git submodule sync --recursive")]),s._v(" "),a("br"),s._v(" "),a("br")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("编译PX4时出现以下类似这种错误：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Failed to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" yaml: No module named "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yaml'")]),s._v("\nYou may need to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" it using:\n    pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --user pyyaml\n")])])]),a("p",[s._v("解决方案：\n按照提示的改，即输入"),a("code",[s._v("pip3 install --user pyyaml")]),s._v("。\n"),a("br"),s._v(" "),a("br")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("在"),a("code",[s._v("sudo apt-get install ***")]),s._v("时出错：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("下列软件包有未满足的依赖关系：\n libayatana-appindicator3-1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 依赖: libayatana-indicator3-7 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),s._v(".0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 但是它将不会被安装\n libegl1-mesa "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 依赖: libgbm1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.0")]),s._v(".5-0ubuntu0~16.04.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n libsane "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 依赖: libsane1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".31-4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 但是它将不会被安装\n perl-base "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 破坏: debconf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v(".61"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 但是 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v(".58ubuntu2 正要被安装\n             破坏: debconf:i386 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v(".61"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n rygel "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 依赖: libges-1.0-0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 但是它将不会被安装\n sane-utils "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 依赖: update-inetd 但是它将不会被安装\n              依赖: libsane1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".27"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 但是它将不会被安装\nE: 错误，pkgProblemResolver::Resolve 发生故障，这可能是有软件包被要求保持现状的缘故。\n")])])]),a("p",[s._v("解决方案：提示依赖什么，就安装依赖库及其版本号（低的那个），例如"),a("br"),s._v(" "),a("code",[s._v("sudo apt install libcupsimage2-dev=2.2.10-6+deb10u1")]),s._v("。\n"),a("br"),s._v(" "),a("br")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("在"),a("code",[s._v("make px4_sitl_default gazebo")]),s._v(" 时出错：编译器g++出错")]),a("br"),s._v("\n问题原因：可能是内存不够。"),a("br"),s._v("\n解决方法：将 swap 交换内存扩大，并启用，因为有可能并没有启用。\n"),a("br"),s._v(" "),a("br")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("gazebo卡在加载世界模型界面/加载太慢")]),a("br"),s._v("\n解决方案：直接下载所有模型到用户的根目录下的"),a("code",[s._v(".gazebo/models/")]),s._v("下：")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.gazebo/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p models\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.gazebo/models/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://file.ncnynl.com/ros/gazebo_models.txt\n")])])]),a("p",[s._v("输出了"),a("code",[s._v("gazebo_models.txt")]),s._v("，可用 ls 查看\n继续运行：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -i gazebo_models.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" model.tar.g* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -n1 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzvf\n")])])]),a("br"),s._v(" "),a("ul",[a("li",[a("strong",[s._v("make px4_sitl_default gazebo 时出现错误：虚拟机无法分配内存")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);