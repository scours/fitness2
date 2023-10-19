The content of this folder represents the content of <a target="_blank" href="https://fitness.agroparistech.fr/fitness/lectures/" >FITNESS 1
</a>

Yet, some contents have not been uploaded to GitHub, because they are heavy files.

Those content not uploaded are essentially media files, such as images, and videos.

Those content have been filtered out by using the following command: 

**rsync -av --exclude-from=sync-exclusion-list.txt source destination** 



The content of sync-exclusion-list is: 

**/common/**.png

**/common/**.svg

**/common/**.jpg

**/specialized/**.png

**/specialized/**.svg

**/specialized/**.jpg

**/wordcloud/**.png

**/wordcloud/**.svg

**/wordcloud/**.jpg

**/teasing/**.png

**/teasing/**.svg

**/teasing/**.jpg

**/modifyLectures/**.png

**/modifyLectures/**.svg

**/modifyLectures/**.jpg

**/extra/**.png

**/extra/**.svg

**/extra/**.jpg

src_part*

vide*

src_doc*

Slide*

*.pdf

*.mpg

*.mp4

*.webm

*.avi

*.gif





This command uses a tool called "rsync" to copy files and folders from a source location to a destination. However, it also follows specific rules to decide what not to copy, as specified in a list called "sync-exclusion-list."

The command works as follows:

1. `rsync` is the copying tool.
2. `-av` means "archive" and "verbose." It copies everything while preserving important details like file permissions, and it shows detailed information during the process.
3. `--exclude-from=sync-exclusion-list.txt` tells rsync to refer to a list of rules in a file called "sync-exclusion-list.txt" to determine what should not be copied.
4. `source` is where your files are coming from, and `destination` is where you want to copy them to.

The "sync-exclusion-list" file lists specific rules to exclude certain types of files and folders, such as PNG, SVG, JPG images, PDFs, video files, and more. It also excludes files and folders with names like "src_part*," "vide*," "src_doc*," "Slide*," and so on.

In simple terms, this command makes sure you copy everything from the source to the destination while excluding the file types and patterns mentioned in the "sync-exclusion-list" to keep your copy organized and free from unnecessary files.
