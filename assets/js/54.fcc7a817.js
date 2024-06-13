(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{507:function(t,v,_){t.exports=_.p+"assets/img/git.07f17ecd.png"},767:function(t,v,_){"use strict";_.r(v);var o=_(0),e=Object(o.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("Git 中常用的命令以及一些基础配置")]),t._v(" "),v("h2",{attrs:{id:"git-常用的命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-常用的命令"}},[t._v("#")]),t._v(" Git 常用的命令")]),t._v(" "),v("p",[v("img",{attrs:{src:_(507),alt:"Git"}})]),t._v(" "),v("p",[t._v("下面是我整理的常用 Git 命令清单。几个专用名词的译名如下。")]),t._v(" "),v("p",[t._v("Workspace：工作区")]),t._v(" "),v("p",[t._v("Index / Stage：暂存区")]),t._v(" "),v("p",[t._v("Repository：仓库区（或本地仓库）")]),t._v(" "),v("p",[t._v("Remote：远程仓库")]),t._v(" "),v("h3",{attrs:{id:"一、新建代码库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、新建代码库"}},[t._v("#")]),t._v(" 一、新建代码库")]),t._v(" "),v("blockquote",[v("p",[t._v("在当前目录新建一个Git代码库")])]),t._v(" "),v("p",[t._v("$ git init")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个目录，将其初始化为Git代码库")])]),t._v(" "),v("p",[t._v("$ git init [project-name]")]),t._v(" "),v("blockquote",[v("p",[t._v("下载一个项目和它的整个代码历史")])]),t._v(" "),v("p",[t._v("$ git clone [url]")]),t._v(" "),v("h3",{attrs:{id:"二、配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、配置"}},[t._v("#")]),t._v(" 二、配置")]),t._v(" "),v("p",[t._v("Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。")]),t._v(" "),v("blockquote",[v("p",[t._v("显示当前的Git配置")])]),t._v(" "),v("p",[t._v("$ git config --list")]),t._v(" "),v("blockquote",[v("p",[t._v("编辑Git配置文件")])]),t._v(" "),v("p",[t._v("$ git config -e [--global]")]),t._v(" "),v("blockquote",[v("p",[t._v("设置提交代码时的用户信息")])]),t._v(" "),v("p",[t._v('$ git config [--global] user.name "[name]"')]),t._v(" "),v("p",[t._v('$ git config [--global] user.email "[email address]"')]),t._v(" "),v("h3",{attrs:{id:"三、增加-删除文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、增加-删除文件"}},[t._v("#")]),t._v(" 三、增加/删除文件")]),t._v(" "),v("blockquote",[v("p",[t._v("添加指定文件到暂存区")])]),t._v(" "),v("p",[t._v("$ git add [file1] [file2] ...")]),t._v(" "),v("blockquote",[v("p",[t._v("添加指定目录到暂存区，包括子目录")])]),t._v(" "),v("p",[t._v("$ git add [dir]")]),t._v(" "),v("blockquote",[v("p",[t._v("添加当前目录的所有文件到暂存区")])]),t._v(" "),v("p",[t._v("$ git add .")]),t._v(" "),v("blockquote",[v("p",[t._v("添加每个变化前，都会要求确认")])]),t._v(" "),v("blockquote",[v("p",[t._v("对于同一个文件的多处变化，可以实现分次提交")])]),t._v(" "),v("p",[t._v("$ git add -p")]),t._v(" "),v("blockquote",[v("p",[t._v("删除工作区文件，并且将这次删除放入暂存区")])]),t._v(" "),v("p",[t._v("$ git rm [file1] [file2] ...")]),t._v(" "),v("blockquote",[v("p",[t._v("停止追踪指定文件，但该文件会保留在工作区")])]),t._v(" "),v("p",[t._v("$ git rm --cached [file]")]),t._v(" "),v("blockquote",[v("p",[t._v("改名文件，并且将这个改名放入暂存区")])]),t._v(" "),v("p",[t._v("$ git mv [file-original] [file-renamed]")]),t._v(" "),v("h3",{attrs:{id:"四、代码提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、代码提交"}},[t._v("#")]),t._v(" 四、代码提交")]),t._v(" "),v("blockquote",[v("p",[t._v("提交暂存区到仓库区")])]),t._v(" "),v("p",[t._v("$ git commit -m [message]")]),t._v(" "),v("blockquote",[v("p",[t._v("提交暂存区的指定文件到仓库区")])]),t._v(" "),v("p",[t._v("$ git commit [file1] [file2] ... -m [message]")]),t._v(" "),v("blockquote",[v("p",[t._v("提交工作区自上次commit之后的变化，直接到仓库区")])]),t._v(" "),v("p",[t._v("$ git commit -a")]),t._v(" "),v("blockquote",[v("p",[t._v("提交时显示所有diff信息")])]),t._v(" "),v("p",[t._v("$ git commit -v")]),t._v(" "),v("blockquote",[v("p",[t._v("使用一次新的commit，替代上一次提交")])]),t._v(" "),v("blockquote",[v("p",[t._v("如果代码没有任何新变化，则用来改写上一次commit的提交信息")])]),t._v(" "),v("p",[t._v("$ git commit --amend -m [message]")]),t._v(" "),v("blockquote",[v("p",[t._v("重做上一次commit，并包括指定文件的新变化")])]),t._v(" "),v("p",[t._v("$ git commit --amend [file1] [file2] ...")]),t._v(" "),v("h3",{attrs:{id:"五、分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、分支"}},[t._v("#")]),t._v(" 五、分支")]),t._v(" "),v("blockquote",[v("p",[t._v("列出所有本地分支")])]),t._v(" "),v("p",[t._v("$ git branch")]),t._v(" "),v("blockquote",[v("p",[t._v("列出所有远程分支")])]),t._v(" "),v("p",[t._v("$ git branch -r")]),t._v(" "),v("blockquote",[v("p",[t._v("列出所有本地分支和远程分支")])]),t._v(" "),v("p",[t._v("$ git branch -a")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个分支，但依然停留在当前分支")])]),t._v(" "),v("p",[t._v("$ git branch [branch-name]")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个分支，并切换到该分支")])]),t._v(" "),v("p",[t._v("$ git checkout -b [branch]")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个分支，指向指定commit")])]),t._v(" "),v("p",[t._v("$ git branch [branch] [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个分支，与指定的远程分支建立追踪关系")])]),t._v(" "),v("p",[t._v("$ git branch --track [branch] [remote-branch]")]),t._v(" "),v("blockquote",[v("p",[t._v("切换到指定分支，并更新工作区")])]),t._v(" "),v("p",[t._v("$ git checkout [branch-name]")]),t._v(" "),v("blockquote",[v("p",[t._v("切换到上一个分支")])]),t._v(" "),v("p",[t._v("$ git checkout -")]),t._v(" "),v("blockquote",[v("p",[t._v("建立追踪关系，在现有分支与指定的远程分支之间")])]),t._v(" "),v("p",[t._v("$ git branch --set-upstream [branch] [remote-branch]")]),t._v(" "),v("blockquote",[v("p",[t._v("合并指定分支到当前分支")])]),t._v(" "),v("p",[t._v("$ git merge [branch]")]),t._v(" "),v("blockquote",[v("p",[t._v("选择一个commit，合并进当前分支")])]),t._v(" "),v("p",[t._v("$ git cherry-pick [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("删除分支")])]),t._v(" "),v("p",[t._v("$ git branch -d [branch-name]")]),t._v(" "),v("blockquote",[v("p",[t._v("删除远程分支")])]),t._v(" "),v("p",[t._v("$ git push origin --delete [branch-name]")]),t._v(" "),v("p",[t._v("$ git branch -dr [remote/branch]")]),t._v(" "),v("h3",{attrs:{id:"六、标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、标签"}},[t._v("#")]),t._v(" 六、标签")]),t._v(" "),v("blockquote",[v("p",[t._v("列出所有tag")])]),t._v(" "),v("p",[t._v("$ git tag")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个tag在当前commit")])]),t._v(" "),v("p",[t._v("$ git tag [tag]")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个tag在指定commit")])]),t._v(" "),v("p",[t._v("$ git tag [tag] [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("删除本地tag")])]),t._v(" "),v("p",[t._v("$ git tag -d [tag]")]),t._v(" "),v("blockquote",[v("p",[t._v("删除远程tag")])]),t._v(" "),v("p",[t._v("$ git push origin :refs/tags/[tagName]")]),t._v(" "),v("blockquote",[v("p",[t._v("查看tag信息")])]),t._v(" "),v("p",[t._v("$ git show [tag]")]),t._v(" "),v("blockquote",[v("p",[t._v("提交指定tag")])]),t._v(" "),v("p",[t._v("$ git push [remote] [tag]")]),t._v(" "),v("blockquote",[v("p",[t._v("提交所有tag")])]),t._v(" "),v("p",[t._v("$ git push [remote] --tags")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个分支，指向某个tag")])]),t._v(" "),v("p",[t._v("$ git checkout -b [branch] [tag]")]),t._v(" "),v("h3",{attrs:{id:"七、查看信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#七、查看信息"}},[t._v("#")]),t._v(" 七、查看信息")]),t._v(" "),v("blockquote",[v("p",[t._v("显示有变更的文件")])]),t._v(" "),v("p",[t._v("$ git status")]),t._v(" "),v("blockquote",[v("p",[t._v("显示当前分支的版本历史")])]),t._v(" "),v("p",[t._v("$ git log")]),t._v(" "),v("blockquote",[v("p",[t._v("显示commit历史，以及每次commit发生变更的文件")])]),t._v(" "),v("p",[t._v("$ git log --stat")]),t._v(" "),v("blockquote",[v("p",[t._v("搜索提交历史，根据关键词")])]),t._v(" "),v("p",[t._v("$ git log -S [keyword]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示某个commit之后的所有变动，每个commit占据一行")])]),t._v(" "),v("p",[t._v("$ git log [tag] HEAD --pretty=format:%s")]),t._v(" "),v("blockquote",[v("p",[t._v('显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件')])]),t._v(" "),v("p",[t._v("$ git log [tag] HEAD --grep feature")]),t._v(" "),v("blockquote",[v("p",[t._v("显示某个文件的版本历史，包括文件改名")])]),t._v(" "),v("p",[t._v("$ git log --follow [file]")]),t._v(" "),v("p",[t._v("$ git whatchanged [file]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示指定文件相关的每一次diff")])]),t._v(" "),v("p",[t._v("$ git log -p [file]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示过去5次提交")])]),t._v(" "),v("p",[t._v("$ git log -5 --pretty --oneline")]),t._v(" "),v("blockquote",[v("p",[t._v("显示所有提交过的用户，按提交次数排序")])]),t._v(" "),v("p",[t._v("$ git shortlog -sn")]),t._v(" "),v("blockquote",[v("p",[t._v("显示指定文件是什么人在什么时间修改过")])]),t._v(" "),v("p",[t._v("$ git blame [file]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示暂存区和工作区的差异")])]),t._v(" "),v("p",[t._v("$ git diff")]),t._v(" "),v("blockquote",[v("p",[t._v("显示暂存区和上一个commit的差异")])]),t._v(" "),v("p",[t._v("$ git diff --cached [file]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示工作区与当前分支最新commit之间的差异")])]),t._v(" "),v("p",[t._v("$ git diff HEAD")]),t._v(" "),v("blockquote",[v("p",[t._v("显示两次提交之间的差异")])]),t._v(" "),v("p",[t._v("$ git diff [first-branch]...[second-branch]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示今天你写了多少行代码")])]),t._v(" "),v("p",[t._v('$ git diff --shortstat "@{0 day ago}"')]),t._v(" "),v("blockquote",[v("p",[t._v("显示某次提交的元数据和内容变化")])]),t._v(" "),v("p",[t._v("$ git show [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示某次提交发生变化的文件")])]),t._v(" "),v("p",[t._v("$ git show --name-only [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示某次提交时，某个文件的内容")])]),t._v(" "),v("p",[t._v("$ git show [commit]:[filename]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示当前分支的最近几次提交")])]),t._v(" "),v("p",[t._v("$ git reflog")]),t._v(" "),v("h3",{attrs:{id:"八、远程同步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#八、远程同步"}},[t._v("#")]),t._v(" 八、远程同步")]),t._v(" "),v("blockquote",[v("p",[t._v("下载远程仓库的所有变动")])]),t._v(" "),v("p",[t._v("$ git fetch [remote]")]),t._v(" "),v("blockquote",[v("p",[t._v("显示所有远程仓库")])]),t._v(" "),v("p",[t._v("$ git remote -v")]),t._v(" "),v("blockquote",[v("p",[t._v("显示某个远程仓库的信息")])]),t._v(" "),v("p",[t._v("$ git remote show [remote]")]),t._v(" "),v("blockquote",[v("p",[t._v("增加一个新的远程仓库，并命名")])]),t._v(" "),v("p",[t._v("$ git remote add [shortname] [url]")]),t._v(" "),v("blockquote",[v("p",[t._v("取回远程仓库的变化，并与本地分支合并")])]),t._v(" "),v("p",[t._v("$ git pull [remote] [branch]")]),t._v(" "),v("blockquote",[v("p",[t._v("上传本地指定分支到远程仓库")])]),t._v(" "),v("p",[t._v("$ git push [remote] [branch]")]),t._v(" "),v("blockquote",[v("p",[t._v("强行推送当前分支到远程仓库，即使有冲突")])]),t._v(" "),v("p",[t._v("$ git push [remote] --force")]),t._v(" "),v("blockquote",[v("p",[t._v("推送所有分支到远程仓库")])]),t._v(" "),v("p",[t._v("$ git push [remote] --all")]),t._v(" "),v("h3",{attrs:{id:"九、撤销"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#九、撤销"}},[t._v("#")]),t._v(" 九、撤销")]),t._v(" "),v("blockquote",[v("p",[t._v("恢复暂存区的指定文件到工作区")])]),t._v(" "),v("p",[t._v("$ git checkout [file]")]),t._v(" "),v("blockquote",[v("p",[t._v("恢复某个commit的指定文件到暂存区和工作区")])]),t._v(" "),v("p",[t._v("$ git checkout [commit] [file]")]),t._v(" "),v("blockquote",[v("p",[t._v("恢复暂存区的所有文件到工作区")])]),t._v(" "),v("p",[t._v("$ git checkout .")]),t._v(" "),v("blockquote",[v("p",[t._v("重置暂存区的指定文件，与上一次commit保持一致，但工作区不变")])]),t._v(" "),v("p",[t._v("$ git reset [file]")]),t._v(" "),v("blockquote",[v("p",[t._v("重置暂存区与工作区，与上一次commit保持一致")])]),t._v(" "),v("p",[t._v("$ git reset --hard")]),t._v(" "),v("blockquote",[v("p",[t._v("重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变")])]),t._v(" "),v("p",[t._v("$ git reset [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致")])]),t._v(" "),v("p",[t._v("$ git reset --hard [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("重置当前HEAD为指定commit，但保持暂存区和工作区不变")])]),t._v(" "),v("p",[t._v("$ git reset --keep [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("新建一个commit，用来撤销指定commit")])]),t._v(" "),v("blockquote",[v("p",[t._v("后者的所有变化都将被前者抵消，并且应用到当前分支")])]),t._v(" "),v("p",[t._v("$ git revert [commit]")]),t._v(" "),v("blockquote",[v("p",[t._v("暂时将未提交的变化移除，稍后再移入")])]),t._v(" "),v("p",[t._v("$ git stash")]),t._v(" "),v("p",[t._v("$ git stash pop")]),t._v(" "),v("h3",{attrs:{id:"十、其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十、其他"}},[t._v("#")]),t._v(" 十、其他")]),t._v(" "),v("blockquote",[v("p",[t._v("生成一个可供发布的压缩包")])]),t._v(" "),v("p",[t._v("$ git archive")]),t._v(" "),v("blockquote",[v("p",[t._v("配置全局的过滤文件")])]),t._v(" "),v("p",[v("code",[t._v("$ git config --global core.excludesfile ~/development/workspace/.gitignore")])]),t._v(" "),v("div",{staticClass:"language-.gitignore line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("*.class\ntarget/\n*.iml\n.settings/\nbin/\n.idea/\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br")])])])}),[],!1,null,null,null);v.default=e.exports}}]);