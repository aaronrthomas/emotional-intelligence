import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Video, LinkIcon, Home } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ResourcesPage() {
  const articles = [
    {
      title: "Understanding the Five Components of Emotional Intelligence",
      description: "An in-depth look at self-awareness, self-regulation, motivation, empathy, and social skills.",
      author: "Dr. Sarah Johnson",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      link: "/resources/articles/emotional-intelligence-components",
    },
    {
      title: "The Science Behind Emotional Intelligence",
      description: "Research findings on how emotional intelligence affects personal and professional success.",
      author: "Prof. Michael Chen",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
      link: "/resources/articles/emotional-intelligence-science",
    },
    {
      title: "Developing Empathy in the Workplace",
      description: "Practical strategies for building empathy with colleagues and team members.",
      author: "Emma Rodriguez",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      link: "/resources/articles/workplace-empathy",
    },
    {
      title: "Emotional Intelligence in Leadership",
      description: "How emotionally intelligent leaders create more engaged and productive teams.",
      author: "James Wilson",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
      link: "/resources/articles/leadership-eq",
    },
  ]

  const videos = [
    {
      title: "The Power of Emotional Intelligence",
      description: "An introduction to emotional intelligence and why it matters in today's world.",
      duration: "15:24",
      presenter: "Dr. Lisa Taylor",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      link: "/resources/videos/power-of-eq",
    },
    {
      title: "Recognizing Emotions in Others",
      description: "How to read facial expressions and body language to better understand others' emotions.",
      duration: "22:08",
      presenter: "Prof. Robert Kim",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      link: "/resources/videos/recognizing-emotions",
    },
    {
      title: "Managing Difficult Conversations",
      description: "Techniques for navigating challenging discussions with emotional intelligence.",
      duration: "18:45",
      presenter: "Sophia Martinez",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      link: "/resources/videos/difficult-conversations",
    },
    {
      title: "Building Emotional Resilience",
      description: "Strategies for developing the ability to bounce back from emotional challenges.",
      duration: "20:12",
      presenter: "Dr. David Johnson",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      link: "/resources/videos/emotional-resilience",
    },
  ]

  const books = [
    {
      title: "Emotional Intelligence: Why It Can Matter More Than IQ",
      author: "Daniel Goleman",
      description:
        "The groundbreaking book that redefined what it means to be smart and opened up a new understanding of human potential.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      link: "https://www.amazon.com/Emotional-Intelligence-Matter-More-Than/dp/055338371X",
    },
    {
      title: "Permission to Feel",
      author: "Marc Brackett",
      description:
        "A practical guide to understanding the power of emotions and developing emotional intelligence skills.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      link: "https://www.amazon.com/Permission-Feel-Unlocking-Emotions-Ourselves/dp/1250212847",
    },
    {
      title: "Emotional Agility",
      author: "Susan David",
      description: "Get Unstuck, Embrace Change, and Thrive in Work and Life by developing emotional agility.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      link: "https://www.amazon.com/Emotional-Agility-Unstuck-Embrace-Change/dp/1592409490",
    },
    {
      title: "Primal Leadership",
      author: "Daniel Goleman, Richard Boyatzis, Annie McKee",
      description: "Unleashing the Power of Emotional Intelligence in leadership contexts.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      link: "https://www.amazon.com/Primal-Leadership-Learning-Emotional-Intelligence/dp/1591391849",
    },
  ]

  const externalResources = [
    {
      title: "Yale Center for Emotional Intelligence",
      description: "Research, educational resources, and training programs on emotional intelligence.",
      website: "yale.edu/emotionalintelligence",
      link: "https://www.ycei.org/",
    },
    {
      title: "Six Seconds Emotional Intelligence Network",
      description: "Global community and resources for developing and applying emotional intelligence.",
      website: "6seconds.org",
      link: "https://www.6seconds.org/",
    },
    {
      title: "Greater Good Science Center",
      description: "Science-based insights for a meaningful life, including emotional intelligence resources.",
      website: "greatergood.berkeley.edu",
      link: "https://greatergood.berkeley.edu/",
    },
    {
      title: "Mind Tools: Emotional Intelligence Resources",
      description: "Practical tools and resources for developing emotional intelligence in the workplace.",
      website: "mindtools.com/emotional-intelligence",
      link: "https://www.mindtools.com/pages/article/newCDV_59.htm",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button variant="outline" size="icon">
                <Home className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Resources</h1>
          </div>

          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Expand Your Knowledge</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Explore our curated collection of articles, videos, books, and external resources to deepen your
              understanding of emotional intelligence.
            </p>
          </div>

          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="books" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Books
              </TabsTrigger>
              <TabsTrigger value="external" className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                External Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {articles.map((article, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHh4eIR4hHh4mIiAmIR4eHiUmLDI2JR4eKjU9MTU+QUJBIzpMUFVLVFJfTUH/2wBDAR"
                      />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="mb-2">{article.description}</CardDescription>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link href={article.link} className="w-full">
                        <Button variant="outline" className="w-full">
                          Read Article
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline">View All Articles</Button>
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {videos.map((video, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full group">
                      <Image
                        src={video.image}
                        alt={video.title}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHh4eIR4hHh4mIiAmIR4eHiUmLDI2JR4eKjU9MTU+QUJBIzpMUFVLVFJfTUH/2wBDAR"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                          <Video className="h-6 w-6 text-teal-600" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="mb-2">{video.description}</CardDescription>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{video.presenter}</span>
                        <span>{video.duration}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link href={video.link} className="w-full">
                        <Button variant="outline" className="w-full">
                          Watch Video
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline">View All Videos</Button>
              </div>
            </TabsContent>

            <TabsContent value="books" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {books.map((book, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-64 w-full flex justify-center p-4 bg-gray-50 dark:bg-gray-900">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={120}
                        height={180}
                        className="object-contain"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHh4eIR4hHh4mIiAmIR4eHiUmLDI2JR4eKjU9MTU+QUJBIzpMUFVLVFJfTUH/2wBDAR"
                      />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg">{book.title}</CardTitle>
                      <CardDescription className="text-sm font-medium">by {book.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{book.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link href={book.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full">
                          View Book
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline">View All Books</Button>
              </div>
            </TabsContent>

            <TabsContent value="external" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {externalResources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <LinkIcon className="h-5 w-5 text-teal-600" />
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.website}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href={resource.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full">
                          Visit Website
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
